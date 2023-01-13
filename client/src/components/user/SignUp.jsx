import {
  Button,
  FormControl,
  FormLabel, Input,
  Stack, useColorModeValue
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../redux/Actions";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fontColor = useColorModeValue("gray.800", "whiteAlpha.800");
  const bgColor = useColorModeValue("gray.400", "gray.600");
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(newUser(user));
    navigate("/log_in");
  };

  return (
    <Stack
      w={"full"}
      h={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        w={"md"}
        h={"md"}
        bg={bgColor}
        borderRadius={"xl"}
        alignItems={"center"}
        justifyContent={"center"}
        fontFamily={"tertiary"}
        color={fontColor}
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              variant={"filled"}
              w={"2xs"}
              marginBottom={2}
              fontFamily={"secondary"}
              color={fontColor}
              fontSize={"lg"}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              variant={"filled"}
              w={"2xs"}
              marginBottom={2}
              fontFamily={"secondary"}
              color={fontColor}
              fontSize={"lg"}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Teléfono</FormLabel>
            <Input
              type="text"
              name="phone"
              onChange={handleChange}
              variant={"filled"}
              w={"2xs"}
              marginBottom={2}
              fontFamily={"secondary"}
              color={fontColor}
              placeholder={"opcional"}
              fontSize={"lg"}
            />
          </FormControl>

          {show ? (
            <>
              <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Stack position={"relative"} direction={"row"}>
                  <Input
                    type="text"
                    name="password"
                    onChange={handleChange}
                    variant={"filled"}
                    w={"2xs"}
                    marginBottom={2}
                    fontFamily={"secondary"}
                    color={fontColor}
                    fontSize={"lg"}
                  />
                  <Button
                    variant={"unstyled"}
                    onClick={() => setShow(!show)}
                    position={"absolute"}
                    right={0}
                  >
                    {" "}
                    <GrFormView fontSize={26} />
                  </Button>
                </Stack>
              </FormControl>
            </>
          ) : (
            <>
              <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Stack position={"relative"} direction={"row"}>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    variant={"filled"}
                    w={"2xs"}
                    marginBottom={2}
                    fontFamily={"secondary"}
                    color={fontColor}
                    fontSize={"4xl"}
                  />
                  <Button
                    variant={"unstyled"}
                    onClick={() => setShow(!show)}
                    position={"absolute"}
                    right={0}
                  >
                    {" "}
                    <GrFormViewHide fontSize={26} />
                  </Button>
                </Stack>
              </FormControl>
            </>
          )}

          <Stack alignItems={"center"}>
            <Button type="submit" margin={2} w={"3xs"}>
              Enviar
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default SignUp;
