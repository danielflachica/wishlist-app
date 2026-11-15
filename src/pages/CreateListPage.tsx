import { useRef, useState } from "react";
import Page from "@/components/Page";
import { Button, Code, Field, Input, Link, Text } from "@chakra-ui/react";

function CreateListPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const sanitizeInput = (input: string) => {
    return input.replace(/[^a-zA-Z ]/g, "").replace(/ {2,}/g, " ");
  };

  const handleInputChange = () => {
    let sanitizedInput = sanitizeInput(inputRef.current?.value || "");
    let slug = sanitizedInput.trim().replaceAll(" ", "-").toLowerCase();

    setName(sanitizedInput || "");
    setSlug(slug || "");
  };

  return (
    <Page title="Christmas wishlist" align="center" justify="center">
      <Text textAlign="left">Make a list. Share the link. Get your gifts.</Text>

      <Field.Root>
        <Field.Label>
          Enter your name
          <Field.RequiredIndicator />
        </Field.Label>
        <Input
          ref={inputRef}
          placeholder="e.g. Anne, Vice Ganda, or Daniel Pogi"
          value={name}
          onChange={handleInputChange}
        />
        <Field.HelperText>
          Your link will end in <Code>/u/{slug}</Code>
        </Field.HelperText>
        <Field.ErrorText />
      </Field.Root>
      <Button w="full">Create my list</Button>

      <Text textAlign="left" fontSize="xs" color="gray.500">
        Already have a list? View it <Link href="#">here</Link>.
      </Text>
    </Page>
  );
}

export default CreateListPage;
