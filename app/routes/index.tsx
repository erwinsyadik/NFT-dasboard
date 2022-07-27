import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function CallToActionWithAnnotation() {
  return (
    <Container
      maxW={"3xl"}
      minH="100vh"
      alignContent="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          NFT
          <Text as={"span"} color={"purple.500"}>
            Dash!
          </Text>
        </Heading>
        <Text
          color={"gray.500"}
          fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
        >
          Manage your NFT as an asset the right way!
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Link to="/login">
            <Button
              size="lg"
              colorScheme={"purple"}
              bg={"purple.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "purple.500",
              }}
            >
              Go to dashboard
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
