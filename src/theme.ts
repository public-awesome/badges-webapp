import { extendTheme } from "@chakra-ui/react";

const defaultSansSerif = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif";
const defaultEmoji = "Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

export default extendTheme({
  fonts: {
    heading: `Chewy,${defaultSansSerif},${defaultEmoji}`,
    body: `Nunito,${defaultSansSerif},${defaultEmoji}`,
    mono: "Menlo,monospace",
  },
  styles: {
    global: {
      h2: {
        fontWeight: "400 !important",
      },
      p: {
        fontWeight: "700",
      },
    },
  },
});
