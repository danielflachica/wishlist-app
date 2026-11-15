import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

interface Props {
  to: string;
}

const BackButton = ({ to }: Props) => {
  return (
    <Button asChild w="full" variant="outline">
      <RouterLink to={`${window.location.origin}/u/${to}`}>
        Back to my list
      </RouterLink>
    </Button>
  );
};

export default BackButton;
