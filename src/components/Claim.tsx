import {
  useDisclosure,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

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

async function validateIdStr(_idStr: string) {
  // TODO
}

async function validatePrivkeyStr(_privkeyStr: string) {
  // TODO
}

export default function Claim() {
  const [page, setPage] = useState(Page.Credential);
  const [idStr, setIdStr] = useState("");
  const [privkeyStr, setPrivkeyStr] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const credentialPage = (
    <Box>
      <Text mb="4">1️⃣ Enter your claim credentials</Text>
      <Button w="100%" minH="8rem" onClick={onOpen}>
        <HStack>
          <ScanIcon w="2.5rem" h="2.5rem" mr="2" />
          <Text>Scan QR code</Text>
        </HStack>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="rgba(0,0,0,0)" boxShadow="" maxW="90%" border="none">
          <QrReader
            constraints={{
              facingMode: "environment",
            }}
            onResult={(result, _error) => {
              if (!!result) {
                const qrData = JSON.parse(result.getText());
                if (!!qrData["id"] && !!qrData["privkeyStr"]) {
                  setIdStr(qrData["id"]);
                  setPrivkeyStr(qrData["privkeyStr"]);
                  onClose();
                } else {
                  onClose();
                  alert("invalid QR!!!");
                }
              }
            }}
            videoContainerStyle={{
              padding: "0",
              borderRadius: "var(--chakra-radii-lg)",
              // TODO: The video takes a 1-2 seconds to load. At the mean time the box shadow is
              // very ugly. Is there any way to delay the displaying of box shadow after the video
              // is loaded?
              boxShadow: "var(--chakra-shadows-dark-lg)",
            }}
            videoStyle={{
              position: "relative",
              borderRadius: "var(--chakra-radii-lg)",
            }}
          />
          <ModalCloseButton
            size="lg"
            top="var(--chakra-space-3)"
            fill="white"
            bg="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.800" }}
            _active={{ bg: "whiteAlpha.900" }}
          />
        </ModalContent>
      </Modal>
      <Text
        my="4"
        _before={{
          right: "0.5rem",
          ml: "2",
          ...hrStyle,
        }}
        _after={{
          left: "0.5rem",
          mr: "2",
          ...hrStyle,
        }}
      >
        or
      </Text>
      <Text mb="4">Enter manually:</Text>
      <FormControl mb="4">
        <FormLabel>id</FormLabel>
        <Input
          placeholder="a number"
          value={idStr}
          onChange={(event) => validateIdStr(event.target.value)}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>key</FormLabel>
        <Input
          placeholder="hex-encoded string"
          value={privkeyStr}
          onChange={(event) => validatePrivkeyStr(event.target.value)}
        />
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
