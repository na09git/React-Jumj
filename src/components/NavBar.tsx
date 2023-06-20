import { HStack, Switch, Image, Text, Box } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Box>
        <Image src={logo} boxSize="60px" />
        <Text>JUMJ</Text>
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
