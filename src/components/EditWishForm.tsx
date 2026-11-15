import useWishlistItem from "@/hooks/useWishlistItem";
import type { Item } from "@/types/Item";
import { Badge, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const EditWishForm = () => {
  const { id } = useParams();
  const { item, editItem } = useWishlistItem(parseInt(id ?? ""));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Item>({
    defaultValues: {
      item: "",
      owner_slug: "",
      is_claimed: false,
    },
  });

  useEffect(() => {
    if (item) reset(item);
  }, [item, reset]);

  const onUpdate = (item: Item) => {
    console.log(item);
    editItem(item);
    reset();
  };

  return (
    <form id="edit-wish-form" onSubmit={handleSubmit(onUpdate)}>
      <Stack align="stretch" gap="1rem" w="full">
        <Field.Root required invalid={!!errors.item}>
          <Field.Label>
            Item
            <Field.RequiredIndicator />
          </Field.Label>
          <Input {...register("item")} placeholder="Wool socks, size M" />
          <Field.ErrorText w="full">
            <Field.ErrorIcon />
            Please enter an item.
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.link}>
          <Field.Label>
            Link
            <Field.RequiredIndicator
              fallback={
                <Badge size="xs" variant="surface">
                  Optional
                </Badge>
              }
            />
          </Field.Label>
          <Input {...register("link")} placeholder="shopee.com/socks" />
        </Field.Root>

        <Field.Root invalid={!!errors.note}>
          <Field.Label>
            Note
            <Field.RequiredIndicator
              fallback={
                <Badge size="xs" variant="surface">
                  Optional
                </Badge>
              }
            />
          </Field.Label>
          <Input {...register("note")} placeholder="Navy or white" />
        </Field.Root>

        <Button type="submit">Save changes</Button>
        <Button type="button" variant="outline" colorPalette="red">
          Delete wish
        </Button>
      </Stack>
    </form>
  );
};

export default EditWishForm;
