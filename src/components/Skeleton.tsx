import { Box, SkeletonText } from "@chakra-ui/react";

interface Props {
  lines?: number;
}

const Skeleton = ({ lines = 1 }: Props) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" w="full">
      <SkeletonText noOfLines={lines} gap={4} />
    </Box>
  );
};

export default Skeleton;
