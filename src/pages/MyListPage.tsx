import { useParams } from "react-router";
import Page from "@/components/Page";
import { Button, Heading } from "@chakra-ui/react";
import { copyToClipboard, extractNameFromSlug } from "../utils/utils";

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
    </Page>
  );
};

export default MyListPage;
