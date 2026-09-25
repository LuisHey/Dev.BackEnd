import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const router = Router();

// Lista todos os produtos.
router.get("/", ProductController.getAll);

// Pesquisa produtos por palavra-chave.
router.get("/search/:keyword", ProductController.getByKeyword);

// Busca um produto pelo ID.
router.get("/:id", ProductController.getById);

// Cadastra um produto.
router.post("/", ProductController.create);

// Atualiza um produto.
router.put("/:id", ProductController.update);

// Exclui um produto.
router.delete("/:id", ProductController.remove);

export default router;
