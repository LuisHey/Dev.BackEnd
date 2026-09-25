import supabase from "../config/supabase.js";

// Busca todos os produtos cadastrados.
async function findAll() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }

  return data;
}

// Busca um produto pelo ID.
async function findById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Cria um novo produto.
async function create(product: {
  category_id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  active: boolean;
}) {
  const { data, error } = await supabase
    .from("products")
    .insert(product)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Atualiza um produto existente.
async function update(
  id: string,
  product: {
    category_id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    available: boolean;
    active: boolean;
  },
) {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Remove um produto pelo ID.
async function remove(id: string) {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Pesquisa produtos pelo título ou descrição.
async function findByKeyword(keyword: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .or(`title.ilike.%${keyword}%, description.ilike.%${keyword}%`);

  if (error) {
    throw error;
  }

  return data;
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
  findByKeyword,
};
