import Page from "@/components/Page";
import { Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

function NotFoundPage() {
  return (
    <Page align="center" justify="center">
      <Heading size="4xl" fontWeight="bold" mb={0}>
        Sorry, we couldn't find that page.
      </Heading>

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
