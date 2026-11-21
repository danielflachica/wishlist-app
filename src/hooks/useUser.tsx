import wishlistService from "@/services/wishlistService";
import { useEffect, useState } from "react";

const useUser = (except: string) => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch owner slugs on first render
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const users = await wishlistService.getOwnerSlugs(except);
      setUsers(users);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return { users, error, loading };
};

export default useUser;
