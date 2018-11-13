import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=aa4028a6dba37dd82b8e185fa521fe08';

export default function getMovies() {
  const resp = axios.get(BASE_URL);
  console.log(resp);
  return resp;
}
