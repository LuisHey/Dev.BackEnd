import type { Request, Response } from "express";
import Product from "../models/Product.js";

// Lista todos os produtos.
async function getAll(req: Request, res: Response) {
  try {
    try {
      const products = await Product.findAll();

      res.status(200).json(products);
    } catch (error) {
      console.log("Erro ao buscar produtos: ", error);

      res.status(404).json({
        message: "Erro ao buscar produtos.",
      });
    }
  } catch (error) {}
}

// Busca um produto pelo ID.
async function getById(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID do Produto não informado.",
    });
  }

  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    console.log("Erro ao buscar produto: ", error);

    res.status(404).json({
      message: "Erro ao buscar produto.",
    });
  }
}

// Cria um novo produto.
async function create(req: Request, res: Response) {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    console.log("Erro ao criar produto: ", error);

    res.status(500).json({
      message: "Erro ao criar produto.",
    });
  }
}

// Atualiza um produto.
async function update(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID do Produto não informado.",
    });
  }

  try {
    const product = await Product.update(id, req.body);

    res.status(200).json(product);
  } catch (error) {
    console.log("Erro ao atualizar produto: ", error);

    res.status(404).json({
      message: "Produto não encontrado.",
    });
  }
}

// Remove um produto.
async function remove(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID do Produto não informado.",
    });
  }

  try {
    const product = await Product.remove(id);

    res.status(200).json({
      message: "Produto removido com sucesso!",
    });
  } catch (error) {
    console.log("Erro ao remover produto: ", error);

    res.status(404).json({
      message: "Produto não encontrado.",
    });
  }
}

// Pesquisa produtos por uma palavra-chave.
async function getByKeyword(
  req: Request<{ keyword: string }>,
  res: Response,
) {
  const { keyword } = req.params;

  if (!keyword || typeof keyword != "string") {
    return res.status(400).json({
      message: "Palavra-chave não informada.",
    });
  }

  try {
    const products = await Product.findByKeyword(keyword);

    res.status(200).json(products);
  } catch (error) {
    console.log("Erro ao pesquisar produtos: ", error);

    res.status(404).json({
      message: "Erro ao buscar produtos.",
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
