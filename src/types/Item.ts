export interface Item {
  id: number;
  owner_slug: string;
  item: string;
  link?: string;
  note?: string;
  is_claimed: boolean;
  updated_at?: Date;
}

export type NewItem = Omit<Item, "id">;
