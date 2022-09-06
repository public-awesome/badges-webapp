import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import ScanIcon from "./ScanIcon";

// https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle
const hrStyle = {
  bg: "rgb(226, 232, 240)",
  content: `""`,
  display: "inline-block",
  height: "1px",
  position: "relative",
  verticalAlign: "middle",
  width: "calc(50% - 0.5rem - 9px)",
};

const mockImageUrl = "http://placekitten.com/500/500";

enum Page {
  Credential = 1,
  Preview,
  Submit,
}

export default function Claim() {
  const [page, setPage] = useState(Page.Credential);

  const credentialPage = (
    <Box>
      <Text mb="4">1️⃣ Enter your claim credentials</Text>
      <Button w="100%" minH="8rem">
        <HStack>
          <ScanIcon w="2.5rem" h="2.5rem" mr="2" />
          <Text>Scan QR code</Text>
        </HStack>
      </Button>
      <Text
        my="4"
        _before={{ right: "0.5rem", ml: "2", ...hrStyle }}
        _after={{ left: "0.5rem", mr: "2", ...hrStyle }}
      >
        or
      </Text>
      <Text mb="4">Enter manually:</Text>
      <FormControl mb="4">
        <FormLabel>id</FormLabel>
        <Input placeholder="a number" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>key</FormLabel>
        <Input placeholder="hex-encoded string" />
      </FormControl>
      <Button variant="outline" onClick={() => setPage(Page.Preview)}>
        Next
      </Button>
    </Box>
  );

  const previewPage = (
    <Box>
      <Text mb="4">2️⃣ Preview of your badge</Text>
      <Image src={mockImageUrl} alt="badge-image" w="100%" mx="auto" mb="4" borderRadius="xl" />
      <VStack alignItems="start" mb="4">
        <Box>
          <Text fontSize="sm" fontWeight="400">
            name
          </Text>
          <Text>This is the name</Text>
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="400">
            description
          </Text>
          <Text lineHeight="1.25" py="1">
            This is the description, which is a long sentence, can take multiple lines
          </Text>
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="400">
            creator
          </Text>
          <Text>stars1z926...qnss</Text>
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="400">
            current supply
          </Text>
          <Text>123</Text>
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="400">
            max supply
          </Text>
          <Text>456</Text>
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="400">
            minting deadline
          </Text>
          <Text>{new Date().toLocaleString("en-US")}</Text>
        </Box>
      </VStack>
      <Button variant="outline" mr="1" onClick={() => setPage(Page.Credential)}>
        Back
      </Button>
      <Button variant="outline" ml="1" onClick={() => setPage(Page.Submit)}>
        Next
      </Button>
    </Box>
  );

  const submitPage = (
    <Box>
      <Text mb="4">3️⃣ Claim now!</Text>
      <FormControl mb="4">
        <FormLabel>Your Stargaze address</FormLabel>
        <Input placeholder="stars1..." />
        <FormHelperText>
          Unfortunately, autofill by connecting to a wallet app isn&apos;t supported yet. Please
          copy-paste your address here.
        </FormHelperText>
      </FormControl>
      <Button variant="outline" mr="1" onClick={() => setPage(Page.Preview)}>
        Back
      </Button>
      <Button variant="outline" ml="1">
        Submit
      </Button>
    </Box>
  );

  const pages = {
    [Page.Credential]: credentialPage,
    [Page.Preview]: previewPage,
    [Page.Submit]: submitPage,
  };

  return <Box px="2">{pages[page]}</Box>;
}
