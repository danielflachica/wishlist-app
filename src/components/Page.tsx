import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  image?: string;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end";
}

const Page = ({
  children,
  title,
  image,
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
        <Stack align="stretch" gap="1rem" w="full">
          {image && (
            <Image
              src={image}
              alignSelf="center"
              boxSize="140px"
              fit="cover"
              alt={image}
            />
          )}
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
