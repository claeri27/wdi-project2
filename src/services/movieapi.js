import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=aa4028a6dba37dd82b8e185fa521fe08';
// const api_key = aa4028a6dba37dd82b8e185fa521fe08;

function getMovies(input) {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=aa4028a6dba37dd82b8e185fa521fe08&language=en-US&query=${input}`;
  const resp = axios.get(BASE_URL);
  console.log(BASE_URL);
  return resp;
}

function getTopRated() {
  const BASE_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=aa4028a6dba37dd82b8e185fa521fe08&language=en-US`;
  const resp = axios.get(BASE_URL);
  return resp;
}

function getNowPlaying() {
  const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=aa4028a6dba37dd82b8e185fa521fe08&language=en-US`;
  const resp = axios.get(BASE_URL);
  return resp;
}

function getUpcoming() {
  const BASE_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=aa4028a6dba37dd82b8e185fa521fe08&language=en-US`;
  const resp = axios.get(BASE_URL);
  return resp;
}

export {
  getMovies,
  getTopRated,
  getNowPlaying,
  getUpcoming
}
