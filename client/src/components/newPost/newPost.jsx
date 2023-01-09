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

  const handleChange = (e) =>{
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(post));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type="text" name="name" onChange={handleChange} />
      <label>age</label>
      <input type="text" name="age" onChange={handleChange}/>
      <label>species</label>
      <input type="text" name="species" onChange={handleChange}/>
      <button type="submit">submit</button>
    </form>
  );
};

export default newPost;
