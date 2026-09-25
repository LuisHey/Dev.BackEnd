import type { Request, Response } from "express";
import Product from "../models/Product.js";

// Lista todos os produtos.
async function getAll(req: Request, res: Response) {
  try {
    const products = await Product.findAll();

    res.status(200).json(products);
  } catch (error) {
    console.log("Erro ao buscar produtos: ", error);

    res.status(500).json({
      message: "Erro ao buscar produtos.",
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

export default {
  getAll,
  create,
};
