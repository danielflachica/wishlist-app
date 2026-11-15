import { Badge, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useParams } from "react-router";

const EditWishForm = () => {
  const { id } = useParams();

  return (
    <form id="edit-wish-form">
      <Stack align="stretch" gap="1rem" w="full">
        <Field.Root required>
          <Field.Label>
            Item
            <Field.RequiredIndicator />
          </Field.Label>
          <Input placeholder="Wool socks, size M" />
          <Field.ErrorText w="full">
            <Field.ErrorIcon />
            Please enter an item.
          </Field.ErrorText>
        </Field.Root>

        <Field.Root>
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
          <Input placeholder="shopee.com/socks" />
        </Field.Root>

        <Field.Root>
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
          <Input placeholder="Navy or white" />
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
