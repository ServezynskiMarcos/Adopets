import { useAuth0 } from "@auth0/auth0-react";
import {
  Alert,
  AlertIcon,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/bannerform1.png";
import { postData } from "../../redux/Actions";

const NewPost = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const [show, setShow] = useState(true);
  const [showB, setShowB] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    name: "",
    age: "",
    species: "",
    description: "",
    coexistence: "",
    ubication: "",
    picture: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      picture: img !== "" ? img : "",
    });
  };

  const handleSubmit = (e) => {
    if (
      post.name === "" ||
      post.age === "" ||
      post.species === "" ||
      post.ubication === ""
    ) {
      setShowB(!showB);
    } else {
      dispatch(postData(post));
      navigate("/");
    }
  };

  const CLOUD_NAME = "dfu4b6gky";
  const UPLOAD_PRESET = "adopets";

  const upload = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    const imgUrl = await axios
      .post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data)
      .then((response) => response.data.secure_url);
    setImg(imgUrl);
    setShow(!show);
  };

  const { isAuthenticated } = useAuth0();

  return (
    <Stack w={"full"} h={"90vh"} direction={"row"}>
      <Stack h={"full"} w={"70%"} position={"relative"}>
        <Image src={banner} h={"full"} />
      </Stack>
      {isAuthenticated ? (
        <Stack
          h={"full"}
          w={"30%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ marginBottom: "10px" }}
              />
              {file ? (
                show ? (
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Checkbox onChange={upload} colorScheme="green" />
                    <FormLabel>Confirmar imagen</FormLabel>
                  </Stack>
                ) : null
              ) : null}
            </Stack>
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
              <FormLabel>Edad</FormLabel>
              <Input
                type="text"
                name="age"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Tipo de Mascota</FormLabel>
              <Select
                placeholder="seleccione"
                name="species"
                onChange={handleChange}
                variant={"filled"}
              >
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="otro">Otro</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Ubicación</FormLabel>
              <Input
                type="text"
                name="ubication"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>¿Convive con otras mascotas?</FormLabel>
              <Select
                placeholder="seleccione"
                name="coexistence"
                onChange={handleChange}
                variant={"filled"}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </Select>
            </FormControl>
            <Stack>
              <Button type="submit" margin={2}>
                Enviar
              </Button>
            </Stack>
          </form>
          {showB ? (
            <Alert status="error">
              <AlertIcon />
              Debe completar los campos requeridos (*)
            </Alert>
          ) : null}
        </Stack>
      ) : (
        <Stack
          h={"full"}
          w={"30%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <form onSubmit={handleSubmit}>
            <FormControl isDisabled>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>Edad</FormLabel>
              <Input
                type="text"
                name="age"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>

            <FormControl isDisabled>
              <FormLabel>Tipo de Mascota</FormLabel>
              <Select
                placeholder="seleccione"
                name="species"
                onChange={handleChange}
                variant={"filled"}
              >
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="otro">Otro</option>
              </Select>
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>Ubicación</FormLabel>
              <Input
                type="text"
                name="ubication"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>Descripción</FormLabel>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                variant={"filled"}
              />
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>¿Convive con otras mascotas?</FormLabel>
              <Select
                placeholder="seleccione"
                name="coexistence"
                onChange={handleChange}
                variant={"filled"}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </Select>
            </FormControl>
            <Stack>
              <Button type="submit" margin={2} disabled>
                Enviar
              </Button>
            </Stack>
          </form>
        </Stack>
      )}
    </Stack>
  );
};

export default NewPost;
