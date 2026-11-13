import { useParams } from "react-router";
import Page from "@/components/Page";
import { Button, Heading, Tabs } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { copyToClipboard, extractNameFromSlug } from "../utils/utils";
import Wishlist from "@/components/Wishlist";

const MyListPage = () => {
  const { slug } = useParams();
  const userName = extractNameFromSlug(slug || "");

  async function handleShareClick() {
    const link = `${window.location.origin}/list/${slug}`;
    const copied = await copyToClipboard(link);

    if (copied) {
      alert("Link copied to clipboard. Share it with your friends!");
    } else {
      window.prompt("Copy this link and share it with your friends:", link);
    }
  }

  return (
    <Page>
      <Heading size="4xl" fontWeight="bold" mb={0}>
        {userName.endsWith("s") ? `${userName}'` : `${userName}'s`} wishlist
      </Heading>

      <Button w="full" variant="outline" onClick={handleShareClick}>
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
              Add wish
            </RouterLink>
          </Button>
          <Wishlist user={slug ?? ""} />
        </Tabs.Content>
        <Tabs.Content value="everyone">View everyone's list</Tabs.Content>
      </Tabs.Root>
    </Page>
  );
};

export default MyListPage;
