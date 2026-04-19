import express, { type Request, type Response } from "express";
import { Client } from "pg";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server jalan! Pintu utama terbuka.");
});


app.get('/api/skills', async(req: Request, res: Response) => {    
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
    });

    try {
        await client.connect();

        const result = await client.query('SELECT * FROM t_learnskill');

        res.json({
            status: "success",
            message: "Success to retrieve data.",
            data: result.rows
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Failed to retrieve data."});
    } finally {
        await client.end();
    }
});

// Jalankan Server
app.listen(port, () => {
    console.log(`🚀 Server run di http://localhost:${port}`);
    console.log(`Please open: http://localhost:${port}/api/skills`);
});