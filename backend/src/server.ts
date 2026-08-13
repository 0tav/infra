import express, { type NextFunction, type Request, type Response } from "express";
import { Client } from "pg";
import "dotenv/config";
import { createCategory, getHardSkills } from "./services/categoryServices.js";
import { connectKafka } from "./lib/kafka.js";
import { runSkillConsumer } from "./workers/skillConsumer.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import { globalErrorHandler } from "./middlewares/errorMiddleware.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Infrastructure API',
            version: '1.0.0',
            description: 'API Documentation'
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: 'Local Server Development'
            }
        ]
    },
    apis: [
        "./src/server.{ts,js}", 
        "./src/services/*.{ts,js}",
        "./dist/server.{ts,js}", 
        "./dist/services/*.{ts,js}",
        "./server.{ts,js}",
        "./services/*.{ts,js}"
    ],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send("Server jalan! Pintu utama terbuka.");
});


//first training
// app.get('/api/skills', async(req: Request, res: Response) => {    
//     const client = new Client({
//         user: process.env.DB_USER,
//         host: process.env.DB_HOST,
//         database: process.env.DB_NAME,
//         password: process.env.DB_PASSWORD,
//         port: Number(process.env.DB_PORT),
//     });

//     try {
//         await client.connect();

//         const result = await client.query('SELECT * FROM t_learnskill');

//         res.json({
//             status: "success",
//             message: "Success to retrieve data.",
//             data: result.rows
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ status: "error", message: "Failed to retrieve data."});
//     } finally {
//         await client.end();
//     }
// });

app.get('/api/skills', async( req: Request, res: Response, next: NextFunction ) => {
    try {
        const data = await getHardSkills();
        res.json({
            status: "success",
            message: "Successfully retrieve data from database/cache.",
            data: data
        });
    } catch (err) {
        next(err);
    }
})

app.post('/api/skills', async( req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await createCategory(req.body);

        res.status(201).json({
            status: "success",
            message: "Category successfully created and event send to Kafka async.",
            data: result
        });
    } catch (err: any) {
        next(err);
    }
})

app.use(globalErrorHandler);

async function bootstrap() {
    try {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        console.log("[SYSTEM] Connecting to Kafka Broker in Docker...");
        await connectKafka();
        
        const maxRetries = 5;
        const retryDelayMs = 2000;
        let consumerActivated = false;

        console.log("[SYSTEM] Activating Background Consumer Worker...");
        for(let attempt = 1; attempt <= maxRetries; attempt++){
            try {
                await runSkillConsumer();
                consumerActivated = true;
                console.log("[KAFKA] Consumer successfully locked onto topic partition!");
                break;
            } catch (consumerERR: any) {
                console.warn(`[KAFKA] [Attempt ${attempt}/${maxRetries}] Partition or cluster metadata not ready yet.`);
                console.warn(`Reason: ${consumerERR.message || consumerERR}`);
                
                if (attempt === maxRetries) {
                    throw new Error("Kafka cluster metadata failed to stabilize after maximum retries.");
                }
                
                console.log(`Waiting ${retryDelayMs / 1000} seconds before next attempt...`);
                await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
            }
        }

        // Setelah infrastruktur siap, baru nyalakan server Express untuk menerima traffic HTTP
        app.listen(port, () => {
            console.log(`[SERVER] Successfully run at http://localhost:${port}`);
            console.log(`Swagger API Docs  : http://localhost:${port}/api-docs`);
            console.log(`GET  Data  : http://localhost:${port}/api/skills`);
            console.log(`POST Data  : Send JSON body to http://localhost:${port}/api/skills\n`);
        });
    } catch (error) {
        console.error("[CRITICAL] Failed to do bootstrap application:", error);
        process.exit(1);
    }
}

bootstrap();