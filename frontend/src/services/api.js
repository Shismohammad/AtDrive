import axios from 'axios';
import { API_CONFIG } from '../constants/constants';

const api = axios.create({
  baseURL: API_CONFIG.API_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

export const login = async (data) => {
  const response = await api.post('/users/login', data);

  if (response.data.data) {
    return response.data.data;
  }

  return response.data;
};

export const register = async (data) => {
  const response = await api.post('/users/register', data);

  if (response.data.data) {
    return response.data.data;
  }

  return response.data;
};

export const getProducts = async () => {
  const response = await api.get('/products');
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};

export const createProduct = async (data) => {
  const response = await api.post('/products', data);
  if (response.data.data) {
    return response.data.data;
  }

  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await api.put(`/products/${id}`, data);
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  if (response.data.data) {
    return response.data.data;
  }

  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post('/orders', data);
  if (response.data.data) {
    return response.data.data;
  }

  return response.data;
};

export const getOrders = async () => {
  const response = await api.get('/orders');
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  if (response.data.data) {
    return response.data.data;
  }

  return response.data;
};

export const updateOrder = async (id, data) => {
  const response = await api.put(`/orders/${id}`, data);
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};
