import { useRef, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Code,
  Field,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

function App() {
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
    <>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="2rem"
      >
        <Stack align="flex-start" gap="1rem" w="full" maxW="350px">
          <Heading size="4xl" fontWeight="bold" mb={0}>
            Christmas wishlist
          </Heading>
          <Text textAlign="left">
            Make a list. Share the link. Get your gifts.
          </Text>

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
              Your link will end in <Code>?/u={slug}</Code>
            </Field.HelperText>
            <Field.ErrorText />
          </Field.Root>
          <Button w="full">Create my list</Button>

          <Text textAlign="left" fontSize="xs" color="gray.500">
            Already have a list? View it <Link href="#">here</Link>.
          </Text>
        </Stack>
      </Box>
    </>
  );
}

export default App;
