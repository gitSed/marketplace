import NextLink from "next/link";
import { Text, Flex } from "@chakra-ui/react";

import { IMenuProps, IMenuItemProps } from "./Menu.types";

function MenuItem(props: IMenuItemProps) {
  const { name, href } = props;

  return (
    <Flex
      as={NextLink}
      href={href}
      paddingX="1.25rem"
      height="2.875rem"
      alignItems="center"
    >
      <Text textStyle="boldParagraph">{name}</Text>
    </Flex>
  );
}

function Menu(props: IMenuProps) {
  const { items } = props;

  return (
    <Flex ml="auto">
      {items.map((item) => (
        <MenuItem key={item.name} name={item.name} href={item.href} />
      ))}
    </Flex>
  );
}
export default Menu;
