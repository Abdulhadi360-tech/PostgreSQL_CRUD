import express from "express";
import cors from "cors";
import router from "./router/router.js";

const app = express();
const PORT = 8000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//   Home route
app.get("/", (req, res) => {
  res.send("Welcome to Postgres CRUD Assignment Solution");
});

// Routes
app.use("/users", router);

//  Connect to Server
app.listen(PORT, () => {
  console.log(`Serving Starting at http://localhost:${PORT}`);
});
