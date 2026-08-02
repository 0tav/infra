import { Client } from 'pg';
import "dotenv/config";

interface ILearnSkill {
    id: number,
    skillname: string,
    description: string,
    enddate: Date,
    isfinish: boolean
};

const connDB = async () => {
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
    });

    try {
        console.log("Try calling database...");
        await client.connect();
        console.log("Connection Success!!");

        const res = await client.query<ILearnSkill>('Select id, skillname, endDate::text from t_learnskill');

        console.log("-------DATA FROM DATABASE--------");
        console.table(res.rows[0]);

    } catch (err) {
        console.log("Connection Failed! ", err);
    } finally {
        await client.end();
    }
}


connDB();