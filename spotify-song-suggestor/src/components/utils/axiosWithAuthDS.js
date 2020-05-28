import axios from "axios";

export const axiosWithAuthDS = () => {
  const token = JSON.parse(localStorage.getItem('token')); 
  
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: 'https://spotify-3-ds.herokuapp.com',
  });
};