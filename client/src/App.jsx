import { Container } from "@chakra-ui/react";
import Home from "./components/home/Home";
import Nav from "./components/home/Nav";
// import NewPost from './components/newPost/newPost';
function App() {
  return (
    <Container minH={"100vh"} minW={"full"} m={0} p={0}>
      <Nav />
      <Home />
    </Container>
  );
}

export default App;
