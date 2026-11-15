import wishlistService from "@/services/wishlistService";
import type { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const useWishlistItem = (id: number) => {
  const [item, setItem] = useState<Item>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchItem = async () => {
      setLoading(true);
      setError("");

      try {
        const wishlistItem = await wishlistService.get(id);
        if (active) setItem(wishlistItem);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (active) setLoading(false);
      }
    };

    void fetchItem();
    return () => {
      active = false;
    };
  }, [id]);

  const editItem = async (item: Item) => {
    setLoading(true);
    setError("");

    try {
      const updatedItem = await wishlistService.update(item);
      setItem(updatedItem);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return { item, error, loading, editItem };
};

export default useWishlistItem;
