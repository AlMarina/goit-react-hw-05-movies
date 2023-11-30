import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c6942cdda8dd57b301a7f73f2d55e489';

export const fetchGetTranding = async (endpoind, query = '') => {
  const resp = await axios.get(
    // `${URL}${endpoind}?language=en-US&api_key=${API_KEY}&query=${query}`
    `${endpoind}?language=en-US&api_key=${API_KEY}&query=${query}`
  );
  return resp.data;
};
