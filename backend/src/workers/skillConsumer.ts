import { prisma } from "@/lib/dbConn.js";
import { consumer } from "@/lib/kafka.js";

const KAFKA_TOPIC = "learning-services.skills";

export async function runSkillConsumer(){
    await consumer.subscribe({ topic: KAFKA_TOPIC, fromBeginning: true });

    console.log(`[KAFKA] Consumer listening on topic: ${KAFKA_TOPIC}`);

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (!message.value) return;

            try {
                const event = JSON.parse(message.value.toString());
                console.log(`[KAFKA] Received event: ${event.eventType}`);

                if (event.eventType === "SKILL_CREATED"){
                    const { categoryId, categoryName, skills } = event.data;

                    console.log(`[WORKER] Processing business logic for category: ${categoryName}`);

                    if (skills && skills.length > 0){
                        for(const skill of skills) {
                            const currentMetadata = (skill.metadata as Record<string, any>) || {};

                            const updateMetadata = {
                                ...currentMetadata,
                                processed_by_worker: true,
                                processed_at: new Date().toISOString(),
                                imigration_status: "Ready to Review"
                            };

                            await prisma.t_learnskill.update({
                                where: { id: skill.id },
                                data: {
                                    metadata: updateMetadata
                                }
                            });

                            console.log(`[WORKER] Metadata update for Skill ID: ${skill.id}`);
                        }
                    }
                }
            } catch (err) {
                console.error("[WORKER] Error processing message:", err);
            }
        },
    });

}