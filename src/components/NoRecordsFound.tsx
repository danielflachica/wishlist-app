import { EmptyState, Text, VStack } from "@chakra-ui/react";

const NoRecordsFound = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Text>:-(</Text>
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Uh-oh</EmptyState.Title>
          <EmptyState.Description>No records found</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default NoRecordsFound;
