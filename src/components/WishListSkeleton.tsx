import { For } from "@chakra-ui/react";
import ItemSkeleton from "./ItemSkeleton";

const WishListSkeleton = () => {
  const COUNT = 4;

  return (
    <For each={Array(COUNT).fill(null)}>
      {(_, index) => <ItemSkeleton key={index} />}
    </For>
  );
};

export default WishListSkeleton;
