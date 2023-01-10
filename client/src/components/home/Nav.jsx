import { Avatar, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png"
const Nav = () => {
  return (
    <Stack
      direction={"row"}
      w={"full"}
      bg={"tertiary"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontFamily={"primary"}
      color={"white"}
    >
      <Stack>
        <Image src={logo} w={'150px'}/>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={10}>
        <Stack direction={"row"} spacing={10}>
          <Text>Publicar</Text>
          <Text>Contacto</Text>
          <Text>Sobre Nosotros</Text>
          <Text>Ayuda</Text>
        </Stack>
        <Avatar src="https://bit.ly/broken-link" size={"sm"} />
      </Stack>
    </Stack>
  );
};

export default Nav;
