import useUser from "@/hooks/useUser";
import { Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import NoRecordsFound from "./NoRecordsFound";
import UserListSkeleton from "./UserListSkeleton";
import { extractNameFromSlug } from "@/utils/utils";

interface Props {
  user: string;
}

const UserList = ({ user }: Props) => {
  const { users, loading } = useUser(user);

  if (!loading && (!users || users.length === 0)) return <NoRecordsFound />;

  return (
    <Stack align="flex-start" gap="1rem" w="full">
      {loading && <UserListSkeleton />}

      {users.map((slug) => (
        <Button
          key={slug}
          asChild
          variant="outline"
          justifyContent="flex-start"
          py={6}
          w="full"
        >
          <RouterLink to={`${window.location.origin}/list/${slug}?me=${user}`}>
            {extractNameFromSlug(slug)}
          </RouterLink>
        </Button>
      ))}
    </Stack>
  );
};

export default UserList;
