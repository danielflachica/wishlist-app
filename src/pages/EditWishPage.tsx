import BackButton from "@/components/BackButton";
import EditWishForm from "@/components/EditWishForm";
import Page from "@/components/Page";
import useListContext from "@/hooks/useListContext";

const EditWishPage = () => {
  const { me } = useListContext();

  return (
    <Page title="Edit wish">
      <BackButton slug={me} />
      <EditWishForm />
    </Page>
  );
};

export default EditWishPage;
