import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/home/Nav";
import FilterPosts from "./components/posts/FilterPost";
import NewPost from './components/posts/NewPost';
import DetailPost from './components/posts/DetailPost';
import NewUserForm from "./components/user/NewUserForm";
import LogIn from "./components/user/LogIn";
function App() {
  return (
    <Container minH={"100vh"} minW={"full"} m={0} p={0}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_post" element={ <NewPost /> } />
        <Route path="/sing_up" element={ <NewUserForm /> } />
        <Route path="/log_in" element={ <LogIn /> } />
        <Route path="/pets" element={ <FilterPosts /> } /> 
        <Route exact path={"/pets/:id"} element={ <DetailPost /> } />
      </Routes>
    </Container>
  );
}

export default App;
