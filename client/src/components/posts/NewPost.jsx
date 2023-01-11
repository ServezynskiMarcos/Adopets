import { Button, FormLabel, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/Actions";

const NewPost = () => {
  const [post, setPost] = useState({
    name: "",
    age: "",
    species: "",
    description: "",
    coexistence: "",
    ubication: "",
  });
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(post));
  };

  const CLOUD_NAME = "dfu4b6gky";
  const UPLOAD_PRESET = "UPLOAD_PRESET";

  const upload = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUD_NAME);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${UPLOAD_PRESET}/upload`,
      { method: "POST", body: data }
    );
    const img = await response.json();
    console.log(img); // reemplazar con un mensaje de éxito o la acción deseada
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      { file ? <img alt="Preview" height="60" src={URL.createObjectURL(file)} /> : null }
      <button onClick={upload}>Upload</button>
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
      <Button type="submit">submit</Button>
    </form>
  );
};

export default NewPost;
