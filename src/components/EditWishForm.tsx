import useWishlistItem from "@/hooks/useWishlistItem";
import type { Item } from "@/types/Item";
import { Badge, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import FormSkeleton from "./FormSkeleton";
import DeleteWishForm from "./DeleteWishForm";

const EditWishForm = () => {
  const { user, id } = useParams();
  const { item, loading, editItem } = useWishlistItem(parseInt(id ?? ""));
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
  const navigate = useNavigate();

  useEffect(() => {
    if (item) reset(item);
  }, [item, reset]);

  const onUpdate = (item: Item) => {
    editItem(item);
    reset();
    navigate(`/u/${user}`);
  };

  if (loading) return <FormSkeleton />;

  return (
    <>
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
        </Stack>
      </form>

      <DeleteWishForm
        id={parseInt(id ?? "")}
        user={user ?? ""}
        btnText="Delete Wish"
      ></DeleteWishForm>
    </>
  );
};

export default EditWishForm;
