import axios from 'axios'

const Server = axios.create({
  baseURL: '',
  timeout: 1000,
});

export default Server