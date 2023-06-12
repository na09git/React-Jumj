import { HStack, Switch, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>JUMJ</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
