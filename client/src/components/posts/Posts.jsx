import {
  Card,
  CardBody,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Portada from "../../assets/Portada.png";
import { getForId } from "../../redux/Actions";

const Posts = () => {
  
  const { allPets } = useSelector((state) => state.pets);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const handleClick = (id) => {
    dispatch(getForId(id))
    navigate(`/pets/${id}`)
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={10} id="posts">
      {allPets?.map((pet) => {
        return (
          <Card
            bg={"gray.600"}
            color={"white"}
            alignItems={"center"}
            maxW={{ base: "sm", xl: "sm" }}
            maxH={{ base: "md", xl: "lg" }}
            size="sm"
            borderRadius="20px 20px 10px 10px"
            onClick={() => handleClick(pet.id)}
          >
            <Image
              src={pet.picture ? pet.picture : Portada}
              alt={pet.name}
              h={"250px"}
              w={"280px"}
              borderRadius="10px 10px 0px 0px"
            />
            <Divider marginBottom={2} />
            <Stack textAlign={"center"}>
              <Heading size="md">{pet.name}</Heading>
              <Text>Ubicacion: {pet.ubication}</Text>
            </Stack>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Posts;
