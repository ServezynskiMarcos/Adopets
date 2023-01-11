import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/home/Nav";
import FilterPosts from "./components/posts/FilterPost";
import NewPost from './components/posts/NewPost';
import DetailPost from './components/posts/DetailPost';
function App() {
  return (
    <Container minH={"100vh"} minW={"full"} m={0} p={0}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={ <NewPost /> } />
        <Route path="/pets" element={ <FilterPosts /> } /> 
        <Route exact path={"/pets/:id"} element={ <DetailPost /> } />
      </Routes>
    </Container>
  );
}

export default App;
