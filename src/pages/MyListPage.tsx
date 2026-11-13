import { useParams } from "react-router";
import { Box, Button, Heading } from "@chakra-ui/react";
import { extractNameFromSlug } from "../utils/utils";

const MyListPage = () => {
  const { slug: userSlug } = useParams();
  const userName = extractNameFromSlug(userSlug || "");

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      p="2rem"
    >
      <Heading size="4xl" fontWeight="bold" mb={0}>
        {userName.endsWith("s") ? `${userName}'` : `${userName}'s`} wishlist
      </Heading>

      <Button>Share my list</Button>
    </Box>
  );
};

export default MyListPage;
