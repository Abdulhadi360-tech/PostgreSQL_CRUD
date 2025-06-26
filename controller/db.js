// db.js
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// PostgreSQL Pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  max: 10,         // Optional: number of clients in the pool
  idleTimeoutMillis: 30000, // Optional: close idle clients after 30s
});

pool.connect()
  .then(() => console.log("✅ Database Pool Connected"))
  .catch(err => console.error("❌ DB Error:", err.message));

// Export the pool to use in your queries
export default pool;
