import {
  Alert,
  AlertIcon,
  Button,
  Checkbox,
  FormLabel,
  Image,
  Input,
  Select,
  Stack,
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
    if (post.name === "" || post.age === "" || post.species === "" || post.ubication === "") {
      setShowB(!showB)
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

  return (
    <Stack w={"full"} h={"100vh"} direction={"row"}>
     
      <Stack h={"100vh"} w={"70%"}>
        <Image src={banner} h={"100vh"} />
      </Stack>
      <Stack
        h={"100vh"}
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
          <FormLabel>Nombre *</FormLabel>
          <Input type="text" name="name" onChange={handleChange} />
          <FormLabel>Edad *</FormLabel>
          <Input type="text" name="age" onChange={handleChange} />
          <FormLabel>Tipo de Mascota *</FormLabel>
          <Select
            placeholder="seleccione"
            name="species"
            onChange={handleChange}
          >
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </Select>
          <FormLabel>Ubicación *</FormLabel>
          <Input type="text" name="ubication" onChange={handleChange} />
          <FormLabel>Descripción</FormLabel>
          <Input type="text" name="description" onChange={handleChange} />
          <FormLabel>¿Convive con otras mascotas?</FormLabel>
          <Select
            placeholder="seleccione"
            name="coexistence"
            onChange={handleChange}
          >
            <option value="si">Si</option>
            <option value="no">No</option>
          </Select>
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
    </Stack>
  );
};

export default NewPost;
