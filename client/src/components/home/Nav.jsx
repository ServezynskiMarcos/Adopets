import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiSearchCircle } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getForUbication } from "../../redux/Actions";
import { FaMoon, FaSun } from "react-icons/fa";

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

  const { toggleColorMode, colorMode } = useColorMode();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const fontColor = useColorModeValue("gray.700", "whiteAlpha.900");
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
      <Stack direction={'row'} alignItems={"center"}>
        <a href="/">
          <Image src={logo} w={"150px"} />
        </a>
        <Icon
          onClick={toggleColorMode}
          as={colorMode === "dark" ? FaSun : FaMoon}
        />
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

        {isAuthenticated ? (
          <Menu>
            <MenuButton>
              <Stack direction={"row"} alignItems={"center"}>
                <Image
                  src={user.picture}
                  alt={user.name}
                  borderRadius={"full"}
                  w={"35px"}
                />
                <MdKeyboardArrowDown />
              </Stack>
            </MenuButton>
            <MenuList color={fontColor}>
              <MenuGroup title={user.name}>
                <MenuItem
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Cerrar Sesion{" "}
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuButton>
              <Stack direction={"row"} alignItems={"center"}>
                <Avatar src="https://bit.ly/broken-link" size={"sm"} />
                <MdKeyboardArrowDown />
              </Stack>
            </MenuButton>
            <MenuList color={fontColor}>
              <MenuGroup title="Perfil">
                <MenuItem onClick={() => loginWithRedirect()}>
                  Iniciar Sesion - Registrarse
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
            </MenuList>
          </Menu>
        )}
      </Stack>
    </Stack>
  );
};

export default Nav;
//
