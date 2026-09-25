import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const router = Router();

// GET /categories
router.get("/", CategoryController.getAll);

// GET /categories/search/:keyword
router.get("/search/:keyword", CategoryController.getByKeyword);

// GET /categories/:id
router.get("/:id", CategoryController.getById);

// POST /categories
router.post("/", CategoryController.create);

// PUT /categories/:id
router.put("/:id", CategoryController.update);

// DELETE /categories/:id
router.delete("/:id", CategoryController.remove);

export default router;
