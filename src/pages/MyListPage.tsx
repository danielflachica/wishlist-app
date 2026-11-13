import { useParams } from "react-router";
import Page from "@/components/Page";
import { Button, Heading } from "@chakra-ui/react";
import { extractNameFromSlug } from "../utils/utils";

const MyListPage = () => {
  const { slug: userSlug } = useParams();
  const userName = extractNameFromSlug(userSlug || "");

  return (
    <Page>
      <Heading size="4xl" fontWeight="bold" mb={0}>
        {userName.endsWith("s") ? `${userName}'` : `${userName}'s`} wishlist
      </Heading>

      <Button w="full" variant="outline">
        Share my list
      </Button>
    </Page>
  );
};

export default MyListPage;
