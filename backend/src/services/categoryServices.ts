import type { Prisma, t_category, t_learnskill } from "@prisma/client";
import { prisma } from "../lib/dbConn.js";
import redis from "@/lib/redis.js";
import { producer } from "@/lib/kafka.js";

const CACHE_KEY = "category:hardskills:retry3";
const KAFKA_TOPIC = "learning-service.skills";

export interface categoryInput {
    id?: number,
    name: string,
    skills: {
        skillname: string,
        description?: string,
        enddate?: Date
        metadata?: Record<string, any>
    }[];
};

export const validateEntry = (data: categoryInput) => {
    if(!data.name || data.name.trim().length < 3) {
        throw new Error("Category name must have at least 3 characters");
    };

    const validatedSkills = data.skills.map(skill => {
        if(!skill.skillname || skill.skillname.trim().length < 3){
            throw new Error(`Skill name "${skill.skillname}" is too short`);
        };
        return{
            skillname: skill.skillname.trim(),
            description: skill.description || null,
            metadata: skill.metadata || {},
            isfinish: false
        };
    })

    return {
        id: data.id,
        name: data.name.trim(),
        skills: validatedSkills
    };
};


/**
 * @openapi
 * /api/skills:
 *   post:
 *     summary: To create a new Category and skill
 *     tags: [Skills & Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Cloud infrastructure(AWS)"
 *               skills:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - skillname
 *                   properties:
 *                     skillname:
 *                       type: string
 *                       example: "Advanced Production Kafka"
 *                     description:
 *                       type: string
 *                       example: "Implementasi microservices terpisah sesuai standar Australia."
 *                     metadata:
 *                       type: object
 *                       properties:
 *                         retry_count:
 *                           type: integer
 *                           example: 3
 *     responses:
 *       201:
 *         description: Category successfully created and event send to Kafka async
 *       400:
 *         description: Failed bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Failed bad request"
 *       422:
 *         description: Failed because unique constraint
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 statusCode:
 *                   type: integer
 *                   example: 422
 *                 message:
 *                   type: string
 *                   example: "Failed unique constraint"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

export const createCategory = async(data: categoryInput): Promise<t_category> => {
    const validatedData = validateEntry(data);

    const result = await prisma.t_category.create({
        data: {
            name: validatedData.name,
            skills: { 
                create: validatedData.skills
            }
        },
        include: {
            skills: true
        }
    });

    await redis.del(CACHE_KEY);
    console.log("Deleted cache");

    try {
        const newSkill = result.skills[0];

        if (newSkill) {
            const eventPayload = {
                eventId: crypto.randomUUID(),
                eventType: "SKILL_CREATED",
                timestamp: new Date().toISOString(),
                data: {
                    categoryId: result.id,
                    categoryName: result.name,
                    skills: result.skills
                }
            };

            await producer.send({
                topic: KAFKA_TOPIC,
                messages: [{
                    key: String(result.id),
                    value: JSON.stringify(eventPayload)
                }]
            });
            
            console.log(`[KAFKA] Event SKILL_CREATED sent for Category ID: ${ result.id }`);
        }
    } catch (err) {
        console.error("[KAFKA] Failed to send event: ", err);
    }

    return result
};

export const updateCategory = async(id: number, name: string): Promise<t_category> => {
    
    if(!name || name.trim().length < 3) {
        throw new Error("Category name must have at least 3 characters");
    };

    const result =  await prisma.t_category.update({
        where: {
            id: id || 0
        },
        data: {
            name: name.trim()
        }
    });

    await redis.del(CACHE_KEY);
    console.log("Deleted cache");

    return result;
}


/**
 * @openapi
 * /api/skills:
 *  get:
 *      summary: To retrieve Hard Skills data (From PostgreSQL database or Redis cache)
 *      tags: [Skills & Categories]
 *      responses:
 *          200:
 *              description: Successfully retrieve data
 *          500:
 *              description: Internal server error
 */
export const getHardSkills = async () => {
    const cached = await redis.get(CACHE_KEY);
    if(cached) {
        console.log("🚀 [REDIS] Data Hit! fetch from cache...");
        console.log(cached);
        return JSON.parse(cached);
    }

    const data = await prisma.t_category.findMany({
        where: {
            skills: {
                some: {
                    metadata: {
                        path: ['retry_count'],
                        equals: 3
                    }
                }
            }
        },
        include: { skills: true }
    });

    console.dir(data, {depth: null, colors: true});
    if(data.length > 0) await redis.set(CACHE_KEY, JSON.stringify(data), "EX", 600);

    return data;
};

let dt = {
    name: "Cloud Computing",
    skills: [
                {
                    skillname: "Basic Docker",
                    description: "Learn how to deploy apps inside docker container.",
                    enddate: new Date("2026-07-21"),
                    isfinish: false,
                    metadata: {
                        steps: ["Install Docker", "Run Postgres", "Prisma Generate"],
                        is_verified: true,
                        retry_count: 3
                    }
                }
            ]
};


// createCategory(dt);
// updateCategory(1, "CloudComputing");
// getHardSkills();