import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const DetailPost = () => {
  const { filterPets } = useSelector((state) => state.pets);

  return (
    <>
      {filterPets ? (
        <Stack h={"100vh"} alignItems={"center"} justifyContent={"center"}>
          <Stack>
            <Image
              src={filterPets.picture}
              alt={filterPets.name}
              h={"250px"}
              w={"280px"}
              borderRadius="10px 10px 0px 0px"
            />
          </Stack>
          <Stack textAlign={"center"}>
            <Text>{filterPets.name}</Text>
            <Text>Ubicacion: {filterPets.ubication}</Text>
            <Text>Edad: {filterPets.age}</Text>
            <Text>Descripcion: {filterPets.description}</Text>
            <Text>Convive con otras mascotas?: {filterPets.coexistence}</Text>
          </Stack>
        </Stack>
      ) : (
        "error"
      )}
    </>
  );
};

export default DetailPost;
