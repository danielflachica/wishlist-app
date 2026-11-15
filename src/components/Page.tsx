import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end";
}

const Page = ({
  children,
  title,
  align = "flex-start",
  justify = "flex-start",
}: Props) => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems={align}
      justifyContent={justify}
      p="2rem"
    >
      <Container maxW="400px" p={0}>
        <Stack align="flex-start" gap="1rem" w="full">
          <Heading size="4xl" fontWeight="bold" mb={0}>
            {title}
          </Heading>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default Page;
