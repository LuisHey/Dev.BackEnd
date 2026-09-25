import { createClient } from "@supabase/supabase-js";

// As credenciais são carregadas pelas variáveis definidas no arquivo .env.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error(
    "As variáveis SUPABASE_URL e SUPABASE_SECRET_KEY precisam estar configuradas."
  );
}

// Cria o cliente usado pelos Models para acessar o banco de dados.
const supabase = createClient(supabaseUrl, supabaseSecretKey);

export default supabase;
