import type { ListContext } from "@/types/ListContext";
import { useParams, useSearchParams } from "react-router";

const useListContext = (): ListContext => {
  const { user, owner } = useParams();
  const [searchParams] = useSearchParams();

  // ROUTE: /u/:user
  if (user)
    return {
      slug: user,
      me: user,
      mode: "owner",
    };

  const me = searchParams.get("me");
  // ROUTE: /list/:owner
  return {
    slug: owner ?? "",
    me,
    mode: me ? "viewer" : "public",
  };
};

export default useListContext;
