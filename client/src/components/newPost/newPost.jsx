import { Button, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/Actions";

const newPost = () => {
  const [post, setPost] = useState({
    name: "",
    age: "",
    species: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(post));
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>name</FormLabel>
      <Input type="text" name="name" onChange={handleChange} />
      <FormLabel>age</FormLabel>
      <Input type="text" name="age" onChange={handleChange} />
      <FormLabel>species</FormLabel>
      <Input type="text" name="species" onChange={handleChange} />
      <Button type="submit">submit</Button>
    </form>
  );
};

export default newPost;
