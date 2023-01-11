import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Portada from "../../assets/Portada.png";

const FilterPosts = () => {
  const { filterPets } = useSelector((state) => state.pets);

  return (
    <Stack direction={"row"} justifyContent={"space-evenly"}>
      {filterPets?.map((pet) => {
        return (
          <Stack>
            <Card maxW="xs" bg={"tertiary"} color={"white"}>
              <CardBody>
                <Image
                  src={Portada}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack paddingY={6}>
                  <Heading size="md">{pet.name}</Heading>
                  <Text>Edad: {pet.age}</Text>
                  <Text>Ubicacion: {pet.ubication}</Text>
                  <Text>Descripcion: {pet.description}</Text>
                  <Text>Convive con otro animales: {pet.coexistence}</Text>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default FilterPosts;
