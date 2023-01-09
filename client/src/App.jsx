import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getData } from './redux/Actions';
import NewPost from './components/newPost/newPost';
function App() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="App">
     <NewPost />
    </div>
  )
}

export default App
