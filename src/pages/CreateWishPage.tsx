import AddWishForm from "@/components/AddWishForm";
import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import useListContext from "@/hooks/useListContext";

const CreateWishPage = () => {
  const { me } = useListContext();

  return (
    <Page title="Add a wish">
      <BackButton slug={me} />
      <AddWishForm />
    </Page>
  );
};

export default CreateWishPage;
