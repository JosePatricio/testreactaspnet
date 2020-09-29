import axios from "axios";
const BASE_BACKEND_URL = "http://localhost:50370/api";

export default {
  getAll: () => axios.get(`${BASE_BACKEND_URL}/Values`),
  add: (book) => axios.post(`${BASE_BACKEND_URL}/values`, book),
  edit: (bookId) => axios.get(`${BASE_BACKEND_URL}/values/${bookId}`),
  update: (book) => axios.put(`${BASE_BACKEND_URL}/values/${book.id}`, book),
  delete: (bookId) => axios.delete(`${BASE_BACKEND_URL}/values/${bookId}`),
};
