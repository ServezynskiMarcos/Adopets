import { Button, Card, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner2.png";
import caninos from "../../assets/caninos.png";
import felinos from "../../assets/felinos.png";
import hamster from "../../assets/hamster.png";
import Portada from "../../assets/Portada.png";
import { getData, getForSpecies } from "../../redux/Actions";
import Posts from "../posts/Posts";

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e, specie) => {
    e.preventDefault()
    dispatch(getForSpecies(specie))
    navigate("/pets");
  }
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Stack w={"full"} h={"100vh"} alignItems={"center"} spacing={8}>
      <Stack
        h={"55vh"}
        direction={"row"}
        justifyContent={"space-evenly"}
        backgroundImage={Portada}
        w={"full"}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={6}>
            <Stack>
              <Text
                fontFamily={"primary"}
                fontSize={"6xl"}
                color={"white"}
                lineHeight={1}
              >
                Cambia su vida.
              </Text>
              <Text
                fontFamily={"primary"}
                fontSize={"6xl"}
                color={"white"}
                lineHeight={1}
              >
                Ellos cambiaran la tuya.
              </Text>
              <Text fontFamily={"secondary"} color={"white"}>
                Hoy todos podemos ayudarlos, todos se merecen un hogar. <br />{" "}
                Scrollea y encontra a tu mejor amigo, él te está esperando.
              </Text>
            </Stack>
            <Stack>
              <a href="#posts"><Button variant={"solid"} size={"lg"}>
                QUIERO ADOPTAR <FaHeart style={{ marginLeft: "10px" }} />
              </Button></a>
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Image src={banner} w={"300px"} h={"385px"} />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={6}
        w={"full"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Card maxW="3xs" onClick={(e) => handleClick(e, "perro")} cursor={'pointer'}>
          <Image
            src={caninos}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Card>
        <Card maxW="3xs" onClick={(e) => handleClick(e, "gato")} cursor={'pointer'}>
          <Image
            src={felinos}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Card>
        <Card maxW="3xs" onClick={(e) => handleClick(e, "otro")} cursor={'pointer'}>
          <Image
            src={hamster}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Card>
      </Stack>
      <Stack w={'full'} minH={'100vh'} paddingY={12}>
        <Text>Mascotas</Text>
        <Posts />
      </Stack>
    </Stack>
  );
};

export default Home;
