import { prisma } from "../lib/dbConn.js";

async function test () {
    try {
        const record = await prisma.t_category.findMany({
            /* where: {
                skillname: {
                    contains: "O",
                    mode: "insensitive"
                }
            }, */
            include: {
                skills: true
            }
        });

        console.dir(record, {depth: null});

    } catch (err) {
        console.error("Failed to retrieve data: ", err);
    } finally {
        await prisma.$disconnect();
    }
}

async function main() {
    try {
        const newData = await prisma.t_category.create({
            data: {
                name: "Cloud Computing",
                skills: {
                    create: [
                        {
                            skillname: "Basic Docker",
                            description: "Learn how to deploy apps inside docker container.",
                            enddate: new Date("2026-07-21"),
                            isfinish: false
                        }
                    ]
                }
            },
            include: {
                skills: true
            }
        });

        console.dir(newData, { depth: null });

        const dataCount = await prisma.t_learnskill.count();
        console.log(`Current total: ${dataCount}`);
    } catch (err) {
        console.error("Failed to save data: ", err);
    } finally {
        await prisma.$disconnect();
    }
}

async function insertSkill(){
    try {
        const result = await prisma.t_learnskill.create({
            data: {
                skillname: "NextJS Beginner",
                description: "An introduction for beginner",
                enddate: new Date("2026-02-12"),
                isfinish: true,
                category: {
                    connectOrCreate: {
                        where: { name: "Frontend" },
                        create: { name: "Frontend" }
                    }
                }
            },
            include: {
                category: true
            }
        });

        console.dir(result, { depth : null});
    } catch (err) {
        console.error("Failed to insert data: ", err);
    } finally {
        await prisma.$disconnect();
    }
    

}

async function updateCategory() {
    try {
        const result = await prisma.t_learnskill.update({
            where: {
                id: 2
            },
            data: {
                category: {
                    connectOrCreate: {
                        where: { name: "Backend"},
                        create: { name: "Backend"}
                    }
                }
            },
            include: {
                category: true
            }
        });

        console.dir(result, { depth: null })
        
    } catch (err) {
        console.error("Failed to update data: ", err)
    } finally {
        await prisma.$disconnect();
    }
}

async function deleteCategory(categoryId: number) {
    try {
        const [updateCategory, updateSkills] = await prisma.$transaction([
            prisma.t_category.update({
                where: { id: categoryId },
                data: { deleteat: new Date() }
            }),

            prisma.t_learnskill.updateMany({
                where: { categoryId: categoryId },
                data: { deleteat: new Date() }
            })
        ])

        console.log(`--- Success ---`);
        console.log(`Category "${updateCategory.name}" has been move to recycle bin.`);
        console.log(`${updateSkills.count} skills in that category is inactive too.`);

    } catch (err) {
        console.error("Failed to delete: ", err);
    } finally {
        await prisma.$disconnect();
    }
}

async function deleteSkill(id: number) {
    try {
        const result = await prisma.t_learnskill.update({
            where: { id: id},
            data: { deleteat: new Date()}
        });

        console.log("---Success---");
    } catch (err) {
        console.error("Failed to delete data: ", err)
    } finally {
        await prisma.$disconnect();
    }
    
}

test();
// main();
// insertSkill();
// updateCategory();
// deleteCategory(1);
// deleteSkill(5);