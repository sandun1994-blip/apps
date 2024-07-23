import Axios from 'axios';

const baseURL = `${import.meta.env.VITE_BASE_URL}`;


const axios = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axios;
