import supabase from "../config/supabase.js";

export interface CategoryData {
  name: string;
  description: string;
  icon: string;
  display_order: number;
  active: boolean;
}

// Busca todas as categorias cadastradas.
async function findAll() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}

// Busca uma categoria pelo ID.
async function findById(id: string) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Cria uma nova categoria.
async function create(category: CategoryData) {
  const { data, error } = await supabase
    .from("categories")
    .insert(category)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Atualiza uma categoria existente.
async function update(id: string, category: CategoryData) {
  const { data, error } = await supabase
    .from("categories")
    .update(category)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Remove uma categoria pelo ID.
async function remove(id: string) {
  const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Pesquisa categorias pelo nome ou descrição.
async function findByKeyword(keyword: string) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .or(`name.ilike.%${keyword}%,description.ilike.%${keyword}%`)
    .order("display_order", { ascending: true });

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
