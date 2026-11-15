import { Box, Skeleton, Stack } from "@chakra-ui/react";

const FormSkeleton = () => (
  <Stack align="stretch" gap="1rem" w="full" aria-busy="true">
    {["item", "link", "note"].map((field) => (
      <Stack key={field} align="stretch" gap="0.5rem">
        <Skeleton height="1rem" width={field === "item" ? "3rem" : "4rem"} />
        <Skeleton height="2.5rem" width="full" borderRadius="md" />
      </Stack>
    ))}

    <Skeleton height="2.5rem" width="full" borderRadius="md" />
    <Box borderWidth="1px" borderRadius="md" p="1px">
      <Skeleton height="2.25rem" width="full" borderRadius="md" />
    </Box>
  </Stack>
);

export default FormSkeleton;
