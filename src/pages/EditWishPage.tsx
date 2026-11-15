import BackButton from "@/components/BackButton";
import EditWishForm from "@/components/EditWishForm";
import Page from "@/components/Page";
import useListContext from "@/hooks/useListContext";

const EditWishPage = () => {
  const { slug, me, mode } = useListContext();

  return (
    <Page title="Edit wish">
      <BackButton to={me ?? ""} />
      <EditWishForm />
    </Page>
  );
};

export default EditWishPage;
