import pkg from 'pg'; 
const { Pool } = pkg;  // Destructure Pool from the default export
import dotenv from 'dotenv'; 

dotenv.config(); 

const dbPool = new Pool({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME, 
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_PORT, 
}); 

try { 
    await dbPool.connect(); 
} catch (error) { 
    console.log("DB connection error", error); 
} 

export { dbPool };
