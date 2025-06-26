import express from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/routerMethod.js";
import { validateUser } from "../middleware/validateUser.js";
const router = express.Router();

// GET: get all users from database
router.get("/", getUsers);
// GET: get a user from database by ID
router.get("/:id", getUserById);
// POST: Add new user to database
router.post("/",validateUser, addUser);

// PUT: update user data
router.put("/:id",validateUser, updateUser);

// DELETE:delete a user from the database
router.delete("/:id", deleteUser);

export default router;
