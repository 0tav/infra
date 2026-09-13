import { Kafka } from "kafkajs";
import * as net from "net";
import * as tls from "tls";

const isCloudEnv = !!process.env.KAFKA_SASL_USERNAME;

const kafkaOptions: any = {
    clientId: 'prep-app',
    brokers: process.env.KAFKA_BOOTSTRAP_SERVERS
        ? process.env.KAFKA_BOOTSTRAP_SERVERS.split(',').map(b => b.trim())
        : ['localhost:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 10
    },
    connectionTimeout: 45000,
    requestTimeout: 60000,
    enforceRequestTimeout: false,
    // socketFactory: (options: any) => {
    //     const socketOptions = {
    //         host: options.host,
    //         port: options.port,
    //         family: 4 // Mengunci koneksi ke IPv4 (menghindari error internalConnectMultiple IPv6)
    //     };

    //     // Jika terkoneksi ke Cloud Aiven, bungkus socket menggunakan enkripsi TLS
    //     if (isCloudEnv) {
    //         return tls.connect({
    //             ...socketOptions,
    //             rejectUnauthorized: false
    //         });
    //     }
        
    //     // Jika terkoneksi ke Local Docker, gunakan TCP socket biasa
    //     return net.connect(socketOptions);
    // }
};

if (isCloudEnv) {
    // kafkaOptions.ssl = true;
    kafkaOptions.ssl = {
        rejectUnauthorized: false
    };
    kafkaOptions.sasl = {
        mechanism: 'scram-sha-256',
        username: process.env.KAFKA_SASL_USERNAME,
        password: process.env.KAFKA_SASL_PASSWORD,
    };
};

const kafka = new Kafka(kafkaOptions);

export const producer = kafka.producer();
export const consumer = kafka.consumer({ 
    groupId: 'skill-processor-group',
    allowAutoTopicCreation: false,
    sessionTimeout: 30000,
    heartbeatInterval: 3000,
 });

const admin = kafka.admin();
const TOPIC_NAME = 'learning-services.skills';

export async function connectKafka() {
    try {
        console.log(`[KAFKA] Initializing connection (Mode: ${isCloudEnv ? 'AIVEN CLOUD' : 'LOCAL DOCKER'})...`);
        
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
