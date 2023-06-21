import express from "express";
import { create, getAll, remove, update, get } from "../controllers/news";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.post("/news",checkPermission, create)
router.get("/news/", getAll)
router.get("/news/:id", get)
router.put("/news/:id",checkPermission, update)
router.delete("/news/:id",checkPermission, remove)



export default router;