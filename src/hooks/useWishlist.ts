import wishlistService from "@/services/wishlistService";
import type { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const useWishlist = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch wishlist items on first render
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setError("");
    setLoading(true);

    try {
      const wishlistItems = await wishlistService.getAll();
      setItems(wishlistItems);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return { items, error, loading };
};

export default useWishlist;
