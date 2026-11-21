import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import UserList from "@/components/UserList";
import WishList from "@/components/WishList";
import useListContext from "@/hooks/useListContext";
import useWishlist from "@/hooks/useWishlist";
import { extractNameFromSlug, handleShareClick } from "@/utils/utils";
import { Button, Tabs } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

const ViewListPage = () => {
  const { slug, me, mode } = useListContext();
  const { items, error, loading, removeItem } = useWishlist(slug ?? "");
  const userName = extractNameFromSlug(slug);

  return (
    <Page
      title={
        userName.endsWith("s") ? `${userName}'` : `${userName}'s` + " wishlist"
      }
    >
      {mode === "owner" && (
        <>
          <Button
            w="full"
            variant="outline"
            onClick={() => handleShareClick(slug ?? "")}
          >
            Share my list
          </Button>

          <Tabs.Root
            defaultValue="mine"
            fitted
            w="full"
            lazyMount
            unmountOnExit
          >
            <Tabs.List>
              <Tabs.Trigger value="mine">My list</Tabs.Trigger>
              <Tabs.Trigger value="everyone">Everyone</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="mine">
              <Button asChild w="full">
                <RouterLink to={`${window.location.origin}/u/${slug}/wish/new`}>
                  Add a wish
                </RouterLink>
              </Button>
              <WishList
                items={items}
                owner={slug ?? ""}
                mode={mode}
                loading={loading}
                onDelete={removeItem}
              />
            </Tabs.Content>

            <Tabs.Content value="everyone">
              <UserList user={slug ?? ""} />
            </Tabs.Content>
          </Tabs.Root>
        </>
      )}

      {mode === "viewer" && (
        <>
          <BackButton to={me ?? ""} />
          <WishList
            items={items}
            owner={slug ?? ""}
            mode={mode}
            loading={loading}
          />
        </>
      )}

      {mode === "public" && (
        <WishList
          items={items}
          owner={slug ?? ""}
          mode={mode}
          loading={loading}
        />
      )}

      <ul>
        <li>slug: {slug}</li>
        <li>me: {me}</li>
        <li>mode: {mode}</li>
      </ul>
    </Page>
  );
};

export default ViewListPage;
