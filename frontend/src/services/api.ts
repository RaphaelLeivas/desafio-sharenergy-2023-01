import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5001/api/v2/',
  timeout: 10000,
});
