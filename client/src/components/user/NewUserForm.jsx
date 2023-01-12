import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../redux/Actions";

const NewUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            variant={"filled"}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            variant={"filled"}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Contrasena</FormLabel>
          <Input
            type="text"
            name="password"
            onChange={handleChange}
            variant={"filled"}
          />
        </FormControl>


        <FormControl isRequired>
          <FormLabel>Telefono</FormLabel>
          <Input
            type="text"
            name="phone"
            onChange={handleChange}
            variant={"filled"}
          />
        </FormControl>
        <Stack>
          <Button type="submit" margin={2}>
            Enviar
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default NewUserForm;
