import {
  getAllPets,
} from "../Slices/petsSlice";
import axios from "axios";

const url = "http://localhost:3001/";

export const getData = () => (dispatch) => {
  axios(`${url}pets`)
    .then((data) => dispatch(getAllPets(data.data)))
    .catch((e) => console.log(e));
};

export const postData = (value) => () => {
  axios.post(`${url}newpost`, value);
}