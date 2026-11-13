import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  user: string;
}

const WishList = ({ user }: Props) => {
  const wishlistItems = [
    {
      id: 1,
      item: "Wool Socks, Size M",
      link: "shop.com",
      note: "gray or navy",
    },
    {
      id: 2,
      item: "Ceramic Pour Over Set",
      link: "www.kinto.com",
      note: "White, 2 cups",
    },
    { id: 3, item: "The Overstory", link: "", note: "Paperback is fine" },
  ];

  return (
    <Stack w="full" gap="1rem" my="1rem">
      {wishlistItems.map((wish) => (
        <Box key={user + wish.id} p={4} borderWidth="1px" borderRadius="md">
          <Stack>
            <Heading size="md" fontWeight="bold">
              {wish.item}
            </Heading>
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
                fontSize="sm"
                target="_blank"
                rel="noopener noreferrer"
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
