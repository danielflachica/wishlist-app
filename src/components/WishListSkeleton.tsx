import { For } from "@chakra-ui/react";
import Skeleton from "./Skeleton";

const WishListSkeleton = () => {
  const COUNT = 4;

  return (
    <For each={Array(COUNT).fill(null)}>
      {(_, index) => <Skeleton key={index} lines={3} />}
    </For>
  );
};

export default WishListSkeleton;
