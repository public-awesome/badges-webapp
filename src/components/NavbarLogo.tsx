import { Heading, HStack, Image, VStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack>
      <Image
        src="https://larry.engineer/about.fd9ecebb.png"
        alt="logo"
        boxSize="50px"
        borderRadius="0"
      />
      <VStack alignItems="start">
        <Heading fontSize="xl" lineHeight="1.2">
          Badges
        </Heading>
        <Heading fontSize="sm" lineHeight="1.2" mt="0.5 !important">
          by Larry Engineer
        </Heading>
      </VStack>
    </HStack>
  );
}
