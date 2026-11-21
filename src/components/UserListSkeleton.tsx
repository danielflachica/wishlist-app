import { For } from "@chakra-ui/react";
import Skeleton from "./Skeleton";

const UserListSkeleton = () => {
  const COUNT = 4;

  return (
    <For each={Array(COUNT).fill(null)}>
      {(_, index) => <Skeleton key={index} />}
    </For>
  );
};

export default UserListSkeleton;
