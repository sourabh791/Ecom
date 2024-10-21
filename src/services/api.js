import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (email, password) => api.post('/auth/login', { email, password });
export const signup = (name, email, password) => api.post('/auth/signup', { name, email, password });
export const getProducts = () => api.get('/products');
export const createProduct = (product, token) => api.post('/products', product, { headers: { Authorization: token } });
