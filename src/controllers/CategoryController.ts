import type { Request, Response } from "express";
import Category from "../models/Category.js";

// Lista todas as categorias.
async function getAll(req: Request, res: Response) {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);

    return res.status(500).json({
      message: "Erro ao buscar categorias.",
    });
  }
}

// Busca uma categoria pelo ID.
async function getById(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID da categoria não informado.",
    });
  }

  try {
    const category = await Category.findById(id);

    return res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);

    return res.status(404).json({
      message: "Categoria não encontrada.",
    });
  }
}

// Cria uma nova categoria.
async function create(req: Request, res: Response) {
  try {
    const category = await Category.create(req.body);

    return res.status(201).json(category);
  } catch (error) {
    console.error("Erro ao criar categoria:", error);

    return res.status(500).json({
      message: "Erro ao criar categoria.",
    });
  }
}

// Atualiza uma categoria.
async function update(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID da categoria não informado.",
    });
  }

  try {
    const category = await Category.update(id, req.body);

    return res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);

    return res.status(404).json({
      message: "Categoria não encontrada.",
    });
  }
}

// Remove uma categoria.
async function remove(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID da categoria não informado.",
    });
  }

  try {
    await Category.remove(id);

    return res.status(200).json({
      message: "Categoria removida com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao remover categoria:", error);

    return res.status(404).json({
      message: "Categoria não encontrada.",
    });
  }
}

// Pesquisa categorias por uma palavra-chave.
async function getByKeyword(
  req: Request<{ keyword: string }>,
  res: Response,
) {
  const { keyword } = req.params;

  if (!keyword || typeof keyword !== "string") {
    return res.status(400).json({
      message: "Palavra-chave não informada.",
    });
  }

  try {
    const categories = await Category.findByKeyword(keyword);

    return res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao pesquisar categorias:", error);

    return res.status(500).json({
      message: "Erro ao buscar categorias.",
    });
  }
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  getByKeyword,
};
