import { Router } from "express"
import { createUser, deleteUser, getUser } from "../controllers/user.controller.js";


const router = Router();

router.post("/user/create", createUser);

router.get("/user/get", getUser );

router.delete("/user/delete/:id", deleteUser);

export default router;