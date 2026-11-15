import { Box, SkeletonText } from "@chakra-ui/react";

const ItemSkeleton = () => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <SkeletonText noOfLines={3} gap={4} />
    </Box>
  );
};

export default ItemSkeleton;
