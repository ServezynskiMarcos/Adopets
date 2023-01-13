import {

  Button,
  FormControl,
  FormLabel,
  Input,
  Stack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/Actions";

const LogIn = () => {
  
  const dispatch = useDispatch();
  const { userLog } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(user.email, user.password));
  };

  return (
    <>
      {userLog.name ? (
        navigate("/")
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <Stack>
            <Button type="submit" margin={2}>
              ingresar
            </Button>
          </Stack>
        </form>
      )}
    </>
  );
};

export default LogIn;
