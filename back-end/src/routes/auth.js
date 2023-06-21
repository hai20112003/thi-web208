import express from "express";
import { get, getAll, signin, update } from "../controllers/auth";
import { signup } from "../controllers/auth";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/user", getAll);
router.get("/user/:id", get);
router.put("/user/:id", update);




export default router;
