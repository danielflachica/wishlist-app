import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import UserList from "@/components/UserList";
import WishList from "@/components/WishList";
import useListContext from "@/hooks/useListContext";
import useWishlist from "@/hooks/useWishlist";
import { extractNameFromSlug, handleShareClick } from "@/utils/utils";
import { Button, HStack, Tabs } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import ErrorPage from "./ErrorPage";

const ViewListPage = () => {
  const { slug, me, mode } = useListContext();
  const { items, error, loading, removeItem } = useWishlist(slug ?? "");
  const userName = extractNameFromSlug(slug);

  if (error) return <ErrorPage />;

  return (
    <Page
      title={
        userName.endsWith("s") ? `${userName}'` : `${userName}'s` + " wishlist"
      }
    >
      {mode === "owner" && (
        <>
          <HStack w="full" gap="3">
            <Button
              flex="1"
              variant="outline"
              onClick={() => handleShareClick(slug ?? "")}
            >
              Share my list
            </Button>

            <Button asChild flex="1" variant="outline">
              <RouterLink to="/install">Add to home screen</RouterLink>
            </Button>
          </HStack>

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
    </Page>
  );
};

export default ViewListPage;
