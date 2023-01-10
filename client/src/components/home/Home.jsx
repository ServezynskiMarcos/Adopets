import { Button, Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/Actions";
import banner from "../../assets/banner2.png";
import hamster from "../../assets/hamster.png";
import felinos from "../../assets/felinos.png";
import caninos from "../../assets/caninos.png";
import Portada from "../../assets/Portada.png";
import { FaHeart } from "react-icons/fa";
const Home = () => {
  const dispatch = useDispatch();

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
                Cambiando vidas.
              </Text>
              <Text
                fontFamily={"primary"}
                fontSize={"6xl"}
                color={"white"}
                lineHeight={1}
              >
                Salvando animales.
              </Text>
              <Text fontFamily={"secondary"} color={"white"}>
                Hoy todos podemos ayudarlos, todos se merecen un hogar. <br />{" "}
                Scrollea y encontra a tu mejor amigo, él te está esperando.
              </Text>
            </Stack>
            <Stack>
              <Button variant={"solid"} size={"lg"}>
                QUIERO ADOPTAR <FaHeart style={{ marginLeft: "10px" }} />
              </Button>
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
        <Card maxW="3xs">
          <Image
            src={caninos}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Card>
        <Card maxW="3xs">
          <Image
            src={felinos}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Card>
        <Card maxW="3xs">
          <Image
            src={hamster}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Card>
      </Stack>
    </Stack>
  );
};

export default Home;
