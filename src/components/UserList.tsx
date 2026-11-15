import { Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

interface Props {
  user: string;
}

const UserList = ({ user }: Props) => {
  const users = [
    { id: 1, name: "Ben", slug: "ben" },
    { id: 2, name: "Ana", slug: "ana" },
    { id: 3, name: "John", slug: "john" },
  ];

  // if (!loading && (!users || users.length === 0)) return <NoRecordsFound />;

  return (
    <Stack align="flex-start" gap="1rem" w="full">
      {users.map((owner: { id: number; name: string; slug: string }) => (
        <Button
          key={owner.id}
          asChild
          variant="outline"
          justifyContent="flex-start"
          py={6}
          w="full"
        >
          <RouterLink
            to={`${window.location.origin}/list/${owner.slug}?me=${user}`}
          >
            {owner.name}
          </RouterLink>
        </Button>
      ))}
    </Stack>
  );
};

export default UserList;
