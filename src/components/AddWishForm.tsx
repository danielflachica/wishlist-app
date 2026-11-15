import useWishlist from "@/hooks/useWishlist";
import type { NewItem } from "@/types/Item";
import { Badge, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const AddWishForm = () => {
  const { user } = useParams();
  const { addItem } = useWishlist(user ?? "");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewItem>();

  const onSubmit = (data: NewItem) => {
    const newItem: NewItem = {
      ...data,
      owner_slug: user || "",
      is_claimed: false,
    };
    addItem(newItem);
    reset();
  };

  return (
    <form id="add-wish-form" onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit">Add wish</Button>
      </Stack>
    </form>
  );
};

export default AddWishForm;
