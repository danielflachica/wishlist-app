import { useState } from "react";
import { useNavigate } from "react-router";
import Page from "@/components/Page";
import { slugify } from "@/utils/utils";
import { Button, Code, Field, Input, Text } from "@chakra-ui/react";

function WelcomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const slug = slugify(name);

  const goToList = () => {
    if (slug) navigate(`/u/${slug}`);
  };

  return (
    <Page title="Christmas wishlist" align="center" justify="center">
      <Text>Make a list. Share the link. Get your gifts.</Text>

      <Field.Root>
        <Field.Label>Your name</Field.Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && goToList()}
          enterKeyHint="go"
          placeholder="e.g. Dips"
        />
        <Field.HelperText>
          {slug ? (
            <>
              Your list will be at{" "}
              <Code>
                {window.location.origin}/u/{slug}
              </Code>
            </>
          ) : (
            "Enter your name to get started."
          )}
        </Field.HelperText>
      </Field.Root>

      <Button w="full" onClick={goToList} disabled={!slug}>
        Go to my list
      </Button>

      <Text fontSize="xs" color="gray.500">
        New here? Enter your name and start adding wishes. Been here before?
        Enter the same name to get back to your list.
      </Text>
    </Page>
  );
}

export default WelcomePage;
