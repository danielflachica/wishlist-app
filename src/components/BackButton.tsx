import { Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router";

interface Props {
  slug?: string | null;
}

const BackButton = ({ slug }: Props) => {
  const navigate = useNavigate();
  const LABEL = "Back to my list";

  if (slug) {
    return (
      <Button asChild w="full" variant="outline">
        <RouterLink to={`/u/${slug}`}>{LABEL}</RouterLink>
      </Button>
    );
  }

  return (
    <Button w="full" variant="outline" onClick={() => navigate(-1)}>
      {LABEL}
    </Button>
  );
};

export default BackButton;
