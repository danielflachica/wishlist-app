import wishlistService from "@/services/wishlistService";
import type { Item, NewItem } from "@/types/Item";
import { useEffect, useState } from "react";

const useWishlist = (owner: string) => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch wishlist items on first render and whenever the owner changes
  useEffect(() => {
    let active = true;
    setItems([]); // don't show the previous owner's items while loading
    setLoading(true);
    setError("");

    wishlistService
      .getAll(owner)
      .then((data) => {
        if (active) setItems(data);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [owner]);

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
