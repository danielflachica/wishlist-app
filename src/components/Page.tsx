import { Box, Container, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end";
}

const Page = ({
  children,
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
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default Page;
