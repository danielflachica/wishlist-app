import AddWishForm from "@/components/AddWishForm";
import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import useListContext from "@/hooks/useListContext";

const CreateWishPage = () => {
  const { slug, me, mode } = useListContext();

  return (
    <Page title="Add a wish">
      <BackButton to={me ?? ""} />
      <AddWishForm />
    </Page>
  );
};

export default CreateWishPage;
