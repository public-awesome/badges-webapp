import { Flex, Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import Navbar from "./Navbar";

// Starting React 18, we need to manually define the Props interface
// https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Flex minHeight="100vh" direction="column">
      <Container maxW="900px" mx="auto" mt="6" mb="20">
        <Navbar />
        {children}
      </Container>
      {/* TODO: add a footer */}
    </Flex>
  );
};

export default Layout;
