import type { Prisma, t_category, t_learnskill } from "@prisma/client";
import { prisma } from "../lib/dbConn.js";

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


export const createCategory = async(data: categoryInput): Promise<t_category> => {
    const validatedData = validateEntry(data);

    return await prisma.t_category.create({
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
};

export const updateCategory = async(id: number, name: string): Promise<t_category> => {
    
    if(!name || name.trim().length < 3) {
        throw new Error("Category name must have at least 3 characters");
    };

    return await prisma.t_category.update({
        where: {
            id: id || 0
        },
        data: {
            name: name.trim()
        }
    });
}

export const getHardSkills = async () => {
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