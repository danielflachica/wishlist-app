import type { Item } from "@/types/Item";
import { supabase } from "@/utils/supabase";

class SupabaseService<TApp extends Item> {
  private table: string;

  constructor(table: string) {
    this.table = table;
  }

  async getAll(orderBy?: string): Promise<TApp[]> {
    const { data, error } = await supabase
      .from(this.table)
      .select("*")
      .order(orderBy ?? "id", { ascending: false });
    if (error) throw error;
    return data;
  }

  async get(id: number): Promise<TApp> {
    const { data, error } = await supabase
      .from(this.table)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(entity: Omit<TApp, "id">): Promise<TApp> {
    const { data, error } = await supabase
      .from(this.table)
      .insert(entity as any)
      .select()
      .single();
    if (error) throw error;
    return data;
  }
  async update(entity: TApp): Promise<TApp> {
    const { data, error } = await supabase
      .from(this.table)
      .update(entity as any)
      .eq("id", entity.id)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async delete(id: number): Promise<void> {
    const { error, count } = await supabase
      .from(this.table)
      .delete({ count: "exact" })
      .eq("id", id);
    if (error) throw error;
    if (count === 0) throw new Error(`Record with id ${id} not found.`);
  }
}

const createSupabaseService = (table: string) => new SupabaseService(table);

export default createSupabaseService;
