import { Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router";

interface Props {
  slug?: string | null;
}

const BackButton = ({ slug }: Props) => {
  const navigate = useNavigate();

  if (slug) {
    return (
      <Button asChild w="full" variant="outline">
        <RouterLink to={`/u/${slug}`}>Back to my list</RouterLink>
      </Button>
    );
  }

  return (
    <Button w="full" variant="outline" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};

export default BackButton;
