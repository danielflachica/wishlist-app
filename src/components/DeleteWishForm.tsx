import useWishlistItem from "@/hooks/useWishlistItem";
import { Button, type ButtonProps } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface Props {
  id: number;
  user: string;
  btnSize?: ButtonProps["size"];
  btnText?: string;
}

const DeleteWishForm = ({
  id,
  user,
  btnSize = "md",
  btnText = "Delete",
}: Props) => {
  const { deleteItem } = useWishlistItem(id);
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onDelete = (itemID: number) => {
    deleteItem(itemID);
    navigate(`/u/${user}`);
  };

  return (
    <form
      id="delete-wish-form"
      onSubmit={handleSubmit(() => {
        onDelete(id);
      })}
    >
      <Button
        type="submit"
        size={btnSize}
        variant="outline"
        colorPalette="red"
        w="full"
      >
        {btnText}
      </Button>
    </form>
  );
};

export default DeleteWishForm;
