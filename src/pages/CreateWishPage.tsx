import AddWishForm from "@/components/AddWishForm";
import Page from "@/components/Page";
import useListContext from "@/hooks/useListContext";

const CreateWishPage = () => {
  const { slug, me, mode } = useListContext();

  return (
    <Page title="Add a wish">
      <AddWishForm user={me ?? ""} />
    </Page>
  );
};

export default CreateWishPage;
