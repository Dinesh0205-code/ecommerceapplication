import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const createOrder = (orderData) => API.post('/orders', orderData);

export default API;
