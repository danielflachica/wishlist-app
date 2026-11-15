import Page from "@/components/Page";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

function NotFoundPage() {
  return (
    <Page
      title="Sorry, we couldn't find that page."
      align="center"
      justify="center"
    >
      <Text textAlign="left" fontSize="xs" color="gray.500">
        Got lost on your way to the North Pole? Go back{" "}
        <ChakraLink asChild>
          <RouterLink to="/">home</RouterLink>
        </ChakraLink>
      </Text>
    </Page>
  );
}

export default NotFoundPage;
