import Page from "@/components/Page";
import UserList from "@/components/UserList";
import WishList from "@/components/WishList";
import useListContext from "@/hooks/UseListContext";
import { extractNameFromSlug, handleShareClick } from "@/utils/utils";
import { Button, Heading, Tabs } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

const ViewListPage = () => {
  const { slug, me, mode } = useListContext();
  const userName = extractNameFromSlug(slug);

  return (
    <Page>
      <Heading size="4xl" fontWeight="bold" mb={0}>
        {userName.endsWith("s") ? `${userName}'` : `${userName}'s`} wishlist
      </Heading>

      {mode === "owner" && (
        <>
          <Button
            w="full"
            variant="outline"
            onClick={() => handleShareClick(slug ?? "")}
          >
            Share my list
          </Button>

          <Tabs.Root defaultValue="mine" fitted w="full">
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
              <WishList owner={slug ?? ""} />
            </Tabs.Content>

            <Tabs.Content value="everyone">
              <UserList user={slug ?? ""} />
            </Tabs.Content>
          </Tabs.Root>
        </>
      )}

      {mode === "viewer" && (
        <>
          <Button asChild w="full" variant="outline">
            <RouterLink to={`${window.location.origin}/u/${me}`}>
              Back to my list
            </RouterLink>
          </Button>

          <WishList owner={slug ?? ""} />
        </>
      )}

      {mode === "public" && <WishList owner={slug ?? ""} />}

      <ul>
        <li>slug: {slug}</li>
        <li>me: {me}</li>
        <li>mode: {mode}</li>
      </ul>
    </Page>
  );
};

export default ViewListPage;
