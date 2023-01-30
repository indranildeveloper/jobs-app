import { ReactNode } from "react";
import NextLink from "next/link";
import { Button as ChakraButton } from "@chakra-ui/react";

const variants = {
  link: {
    variant: "link",
    color: "primary",
  },
  solid: {
    variant: "solid",
    bg: "primary",
    color: "primaryAccent",
    _hover: {
      opacity: "0.9",
    },
  },
  outline: {
    variant: "outline",
    color: "primary",
    bg: "white",
  },
};

export type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  variant = "link",
  icon,
  shallow = false,
}: LinkProps) => {
  return (
    <NextLink href={href} shallow={shallow} passHref>
      <ChakraButton
        leftIcon={icon}
        as="a"
        {...variants[variant]}
      >
        {children}
      </ChakraButton>
    </NextLink>
  );
};
