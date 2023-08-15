"use client";
import { Flex } from "@chakra-ui/react";

import { LogoIcon } from "@/features/shared/assets";
import { withStyledSystem } from "@/features/shared/components";

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
      padding="1.25rem 3.125rem"
    >
      <LogoIcon />
      <Menu items={menuItems} />
    </Flex>
  );
}

export default withStyledSystem(Navbar, "chakra-ui");
