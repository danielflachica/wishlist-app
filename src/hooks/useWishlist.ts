import wishlistService from "@/services/wishlistService";
import type { Item, NewItem } from "@/types/Item";
import { useEffect, useState } from "react";

const useWishlist = (owner: string) => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch wishlist items on first render
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    setError("");

    try {
      const wishlistItems = await wishlistService.getAll(owner);
      setItems(wishlistItems);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item: NewItem) => {
    setLoading(true);
    setError("");

    try {
      const newItem = await wishlistService.create(item);
      setItems([newItem, ...items]);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return { items, error, loading, addItem };
};

export default useWishlist;
