-- Estrutura da tabela utilizada pela funcionalidade de Categoria de Produtos.

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  icon text not null default '',
  display_order integer not null default 0,
  active boolean not null default true
);

-- Índices úteis para consultas e ordenação.
create index if not exists categories_display_order_idx
  on public.categories (display_order);

create index if not exists categories_active_idx
  on public.categories (active);
