import Page from "@/components/Page";
import { Button, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

const ErrorPage = () => {
  return (
    <Page title="Something went wrong" align="center" justify="center">
      <Text color="fg.muted">
        An unexpected error occurred. Try again, and if it keeps happening,
        check back in a little while.
      </Text>

      <Stack gap="3">
        <Button w="full" onClick={() => window.location.reload()}>
          Try again
        </Button>
        <Button asChild w="full" variant="outline">
          <RouterLink to="/">Go back home</RouterLink>
        </Button>
      </Stack>
    </Page>
  );
};

export default ErrorPage;
