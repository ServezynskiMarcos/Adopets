import {
  Card,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Portada from "../../assets/Portada.png";

const FilterPosts = () => {
  const { filterPets } = useSelector((state) => state.pets);

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={10}
      id="posts"
      paddingY={12}
      paddingX={20}
      w={"full"}
      h={'100vh'}

    >
      {filterPets?.map((pet) => {
        return (
          <Card
            bg={"gray.600"}
            color={"white"}
            maxW={{ base: "sm", xl: "xs" }}
            maxH={{ base: "md", xl: "xs" }}
            size="sm"
            borderRadius="20px 20px 10px 10px"
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

export default FilterPosts;
