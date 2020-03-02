import axios from "axios";

export const axiosWithAuth = () => {
   const token = window.localStorage.getItem("token");

   return axios.create({
      baseURL: "https://wunderlist7.herokuapp.com/",
      headers: {
         Authorization: token
      }
   });
};
