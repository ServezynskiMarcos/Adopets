import { getAllPets, getFilterPets, getFilterUbication, getFilterId } from "../Slices/petsSlice";
import axios from "axios";
import { userLogIn } from "../Slices/userSlice";

const url = "http://localhost:3001/";

export const getData = () => (dispatch) => {
  axios(`${url}pets`)
    .then((data) => dispatch(getAllPets(data.data)))
    .catch((e) => console.log(e));
};

export const getForId = (id) => (dispatch) => {
  axios(`${url}pets/`+id)
    .then((data) => dispatch(getFilterId(data.data)))
    .catch((e) => console.log(e));
};

export const getForSpecies = (specie) => (dispatch) => {
  dispatch(getFilterPets(specie));
};

export const getForUbication = (ubication) => (dispatch) => {
  dispatch(getFilterUbication(ubication));
};

export const postData = (value) => () => {
  axios.post(`${url}newpost`, value);
};

export const newUser = (user) => () => {
  axios.post(`${url}newuser`, user);
};
export const logIn = (email,password) => (dispatch) => {
  axios(`${url}login/${email}/${password}`)
    .then((data) => dispatch(userLogIn(data.data)))
    .catch((e) => alert(e.response.data));
  }