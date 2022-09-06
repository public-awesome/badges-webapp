import {
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

import BurgerIcon from "./BurgerIcon";
import CloseIcon from "./CloseIcon";
import NavbarLink from "./NavbarLink";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572#issuecomment-493942129
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <Box w="100%">
      <Flex justify="space-between" align="center" px="3" mb="3">
        <NavbarLogo />
        <Spacer />
        <HStack display={["none", null, "flex", null]} spacing="20">
          <NavbarLink text="Claim" href="/" />
          <NavbarLink text="Create" href="/create" disabled={true} />
          <NavbarLink text="Gallery" href="/gallery" disabled={true} />
        </HStack>
        <Button
          display={[null, null, "none", null]}
          variant="simple"
          minW="1.5rem"
          ref={btnRef}
          onClick={onOpen}
        >
          <BurgerIcon color="black" width="1.5rem" height="1.5rem" />
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
        size="sm"
        preserveScrollBarGap={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box p="6">
            <Button
              variant="simple"
              onClick={onClose}
              minH="5rem"
              w="100%"
              p="6"
              justifyContent="flex-start"
              transition="0.1s all"
              _hover={{ background: "#e1ebff" }}
            >
              <CloseIcon width="2.5rem" height="2.5rem" />
              <Text fontSize="xl" ml="2">
                Close
              </Text>
            </Button>
          </Box>
          <VStack height="100%" px="12" spacing="8" align="left">
            <NavbarLink text="Claim" href="/" fontSize="xx-large" />
            <NavbarLink text="Create" href="/create" fontSize="xx-large" disabled={true} />
            <NavbarLink text="Gallery" href="/gallery" fontSize="xx-large" disabled={true} />
          </VStack>
        </DrawerContent>
      </Drawer>
      <hr />
    </Box>
  );
}
