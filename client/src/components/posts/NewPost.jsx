import { Button, FormLabel, Image, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/Actions";

const NewPost = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  
  const [post, setPost] = useState({
    name: "",
    age: "",
    species: "",
    description: "",
    coexistence: "",
    ubication: "",
    picture: ""
  });
 
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      picture: img !== "" ? img : ""

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(post));
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="file" onChange={(e) => setFile(e.target.files[0])}/>
      {file ? (
        <Image alt="Preview" w="200px" h="200px" src={URL.createObjectURL(file)} />
      ) : null}
      <FormLabel>Nombre</FormLabel>
      <Input type="text" name="name" onChange={handleChange} />
      <FormLabel>Edad</FormLabel>
      <Input type="text" name="age" onChange={handleChange} />
      <FormLabel>Tipo de Mascota</FormLabel>
      <Select
        placeholder="Select option"
        name="species"
        onChange={handleChange}
      >
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="otro">Otro</option>
      </Select>
      <FormLabel>Ubicacion</FormLabel>
      <Input type="text" name="ubication" onChange={handleChange} />
      <FormLabel>Descripcion</FormLabel>
      <Input type="text" name="description" onChange={handleChange} />
      <FormLabel>Convive con otras mascotas?</FormLabel>
      <Select
        placeholder="Select option"
        name="coexistence"
        onChange={handleChange}
      >
        <option value="si">Si</option>
        <option value="no">No</option>
      </Select>
      <Button onClick={upload}>Confirmar imagen</Button>
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default NewPost;
