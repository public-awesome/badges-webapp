import { chakra, Heading } from "@chakra-ui/react";
import * as csstype from "csstype";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  text: string;
  href: string;
  fontSize?: string;
  disabled?: boolean;
};

const NavbarLink: FC<Props> = ({ text, href, fontSize = "xl", disabled = false }) => {
  const { asPath } = useRouter();

  const wrapperStyle = disabled
    ? {
        color: "#adb5bd",
        pointerEvents: "none" as csstype.Property.PointerEvents,
      }
    : asPath === href
    ? {
        color: "black",
        textDecoration: "underline",
        textUnderlineOffset: "6px",
        textDecorationThickness: "3.5px",
        pointerEvents: "none" as csstype.Property.PointerEvents,
      }
    : {
        color: "#adb5bd",
        _hover: {
          color: "#0d6efd",
        },
      };

  return (
    <NextLink href={href} passHref>
      <chakra.a transition="0.1s all" {...wrapperStyle}>
        <Heading fontSize={fontSize}>
          {text}
          {disabled ? <sup> (soon)</sup> : null}
        </Heading>
      </chakra.a>
    </NextLink>
  );
};

export default NavbarLink;
