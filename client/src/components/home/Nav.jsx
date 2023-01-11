import { Avatar, Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiSearchCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getForUbication } from "../../redux/Actions";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    dispatch(getForUbication(search));
    navigate("/pets");
  };

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
        <a href="/">
          <Image src={logo} w={"150px"} />
        </a>
      </Stack>

      <Stack
        w={"xs"}
        direction={"row"}
        alignItems={"center"}
        position={"relative"}
      >
        <Input
          placeholder="Ingrese: ubicacion, especie, descripcion"
          variant={"outlined"}
          bg={"whiteAlpha.500"}
          fontFamily={"secondary"}
          borderRadius={9999}
          size={"md"}
          onChange={handleChange}
        />
        <HiSearchCircle
          fontSize={"25px"}
          style={{ position: "absolute", right: 10, cursor: "pointer" }}
          onClick={handleClick}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={10}>
        <Stack direction={"row"} spacing={10}>
          <a href="/newpost">
            <Text>Publicar</Text>
          </a>
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
