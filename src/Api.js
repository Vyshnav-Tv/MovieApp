 import axios from "axios";

const API_URL ='1e852eabea9a580c25696b2fbe317847';
const BASE_URL ='https://api.themoviedb.org/3';

export const getMovies =async ( searchTerm,page=1)=>{


  
  const response =await(axios.get(`${BASE_URL}/movie/popular?api_key=${API_URL}&page=${page}`));
 return response.data.results;
}