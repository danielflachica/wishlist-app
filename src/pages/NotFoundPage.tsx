import {
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

function NotFoundPage() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="2rem"
    >
      <Stack align="flex-start" gap="1rem" w="full" maxW="350px">
        <Heading size="4xl" fontWeight="bold" mb={0}>
          Sorry, we couldn't find that page.
        </Heading>

        <Text textAlign="left" fontSize="xs" color="gray.500">
          Got lost on your way to the North Pole? Go back{" "}
          <ChakraLink asChild>
            <RouterLink to="/">home</RouterLink>
          </ChakraLink>
        </Text>
      </Stack>
    </Box>
  );
}

export default NotFoundPage;
