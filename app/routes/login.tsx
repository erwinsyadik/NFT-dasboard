import { Container, Button, Icon } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <Container
      maxW={"3xl"}
      minH="100vh"
      alignContent="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Form action="/auth/google" method="post">
        <Button
          type="submit"
          size="lg"
          colorScheme={"purple"}
          bg={"purple.400"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "purple.500",
          }}
        >
          <Icon as={FaGoogle} mr="2" /> Login With Google
        </Button>
      </Form>
    </Container>
  );
}
