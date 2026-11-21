import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import { Alert, Circle, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Step {
  title: string;
  body: ReactNode;
}

const STEPS: Step[] = [
  {
    title: "Open your list in Safari",
    body: (
      <>
        Go to your own list first (the link ending in <b>/u/your-name</b>). The
        home screen icon opens the page you're on when you add it.
      </>
    ),
  },
  {
    title: "Open the share menu",
    body: (
      <>
        Tap the <b>⋯</b> button at the bottom right of Safari, then tap{" "}
        <b>Share</b>. On older versions of iOS, tap the share icon (a square
        with an arrow pointing up) instead.
      </>
    ),
  },
  {
    title: "Choose “Add to Home Screen”",
    body: (
      <>
        Scroll down the list of actions and tap <b>Add to Home Screen</b>.
      </>
    ),
  },
  {
    title: "Keep “Open as Web App” on",
    body: (
      <>
        This makes the list open full screen, like an app, instead of in a
        Safari tab. Change the name if you like.
      </>
    ),
  },
  {
    title: "Tap Add",
    body: (
      <>
        Tap <b>Add</b> at the top right. The icon now sits on your home screen.
      </>
    ),
  },
];

const InstallPage = () => {
  return (
    <Page title="Add to home screen">
      <BackButton />

      <Text>
        Save your wishlist to your iPhone's home screen so it opens in one tap.
      </Text>

      <Stack gap="5" as="ol" listStyleType="none" m={0} p={0}>
        {STEPS.map((step, index) => (
          <HStack as="li" key={step.title} align="flex-start" gap="3">
            <Circle
              size="7"
              flexShrink={0}
              bg="colorPalette.solid"
              color="colorPalette.contrast"
              fontSize="sm"
              fontWeight="bold"
              aria-hidden
            >
              {index + 1}
            </Circle>
            <Stack gap="1">
              <Text fontWeight="semibold">{step.title}</Text>
              <Text fontSize="sm" color="fg.muted">
                {step.body}
              </Text>
            </Stack>
          </HStack>
        ))}
      </Stack>

      <Alert.Root status="neutral" variant="surface">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Description>
            Use Safari. If you don't see “Add to Home Screen”, you may be in
            another app's built-in browser (like Messenger). Tap the Safari or
            “Open in browser” option first.
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </Page>
  );
};

export default InstallPage;
