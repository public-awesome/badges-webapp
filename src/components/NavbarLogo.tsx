import { Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";

/**
 * Wiggle animation is defined in the style tag in `../pages/_document.tsx`
 * See: https://stackoverflow.com/questions/38132700/css-wiggle-shake-effect
 */
export default function Navbar() {
  return (
    <HStack>
      <Link
        isExternal={true}
        href="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        animation="wiggle 2.5s infinite"
      >
        <Image
          src="https://larry.engineer/about.fd9ecebb.png"
          alt="logo"
          boxSize="50px"
          borderRadius="0"
          transition="0.1s all"
          _hover={{
            transform: "scale(1.1)",
          }}
        />
      </Link>
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
