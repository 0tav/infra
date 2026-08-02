import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'prep-app',
    brokers: ['localhost:9092']
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: 'skill-processor-group' });

const admin = kafka.admin();
const TOPIC_NAME = 'learning-services.skills';

export async function connectKafka() {
    try {
        await producer.connect();
        await consumer.connect();
        await admin.connect();
        console.log('[KAFKA] Core clients connected successfully!');

        const existingTopics = await admin.listTopics();

        if (!existingTopics.includes(TOPIC_NAME)) {
            console.log(`[KAFKA] Topic ${TOPIC_NAME} not exists. Create a new topic...`);

            await admin.createTopics({
                topics: [{ topic: TOPIC_NAME, numPartitions: 1 }],
            });

            console.log(`[KAFKA] Topic ${TOPIC_NAME} successfully created`);
        }
    } catch (err) {
        console.error('Kafka connection failed: ', err);
        throw err;
    } finally {
        await admin.disconnect();
    }
}
