import type { Mode } from "@/types/Mode";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import WishListSkeleton from "./WishListSkeleton";
import NoRecordsFound from "./NoRecordsFound";
import type { Item } from "@/types/Item";

interface Props {
  items: Item[];
  owner: string;
  mode: Mode;
  loading: boolean;
  onDelete?: (id: number) => void;
  onClaim?: (id: number) => void;
}

const WishList = ({
  items,
  owner,
  mode,
  loading,
  onDelete,
  onClaim,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/u/${owner}/wish/edit/${id}`);
  };

  if (!loading && (!items || items.length === 0)) return <NoRecordsFound />;

  return (
    <Stack w="full" gap="1rem" my="1rem">
      {loading && <WishListSkeleton />}

      {items.map((wish) => (
        <Box
          key={owner + wish.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          opacity={wish.is_claimed && mode === "viewer" ? 0.6 : 1}
        >
          <Stack>
            <HStack justifyContent="space-between" align="center" w="full">
              <Heading size="md" fontWeight="bold">
                {wish.item}
              </Heading>
              {mode === "owner" && (
                <HStack align="flex-start">
                  <Button
                    type="button"
                    size="xs"
                    variant="outline"
                    onClick={() => handleClick(wish.id)}
                  >
                    Edit
                  </Button>
                  {onDelete && (
                    <Button
                      type="button"
                      size="xs"
                      variant="outline"
                      colorPalette="red"
                      onClick={() => {
                        onDelete(wish.id);
                      }}
                    >
                      Delete
                    </Button>
                  )}
                </HStack>
              )}
              {mode === "viewer" && !wish.is_claimed && onClaim && (
                <Button
                  type="button"
                  size="xs"
                  variant="solid"
                  onClick={() => {
                    onClaim(wish.id);
                  }}
                >
                  Get
                </Button>
              )}
              {mode === "viewer" && wish.is_claimed && (
                <Badge bg="gray.200" variant="surface">
                  Claimed
                </Badge>
              )}
            </HStack>
            {wish.note && (
              <Text fontSize="sm" color="gray.500">
                {wish.note}
              </Text>
            )}
            {wish.link && (
              <Link
                href={
                  /^https?:\/\//i.test(wish.link)
                    ? wish.link
                    : `https://${wish.link}`
                }
                alignSelf="flex-start"
                fontSize="sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                {wish.link}
              </Link>
            )}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default WishList;
