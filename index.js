import express from "express";
import cors from "cors";
import router from "./router/router.js";
import dotenv from "dotenv";


dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Postgres CRUD Assignment Solution");
});

// API Routes
app.use("/users", router);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
