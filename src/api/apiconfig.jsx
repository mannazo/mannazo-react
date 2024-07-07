import axios from 'axios';
import { API_SERVER } from '../constants/paths.js';

export default axios.create({
  baseURL: API_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});
