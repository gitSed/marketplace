"use client";
import { Button, Flex } from "@chakra-ui/react";

import { LogoIcon, UserIcon } from "@/features/shared/assets";

import Menu from "./Menu/Menu.component";

const menuItems = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Rankings", href: "/rankings" },
  { name: "Connect Wallet", href: "/connect-wallet" },
];

function Navbar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap="0.75rem"
      paddingY="1.25rem"
      paddingX={{ base: 2, md: 4, lg: "4rem", xl: "7rem" }}
    >
      <LogoIcon />
      <Menu items={menuItems} />
      <Button textStyle="h6" gap="0.75rem">
        <UserIcon />
        Sign Up
      </Button>
    </Flex>
  );
}

export default Navbar;
