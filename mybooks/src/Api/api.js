// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://book-crud-service-6dmqxfovfq-et.a.run.app/api',
});

export const getBooks = () => {
  return api.get('/books');
};

export const addBook = (bookData) => {
  return api.post('/books/add', bookData);
};

export const editBook = (bookId, bookData) => {
  return api.put(`/books/${bookId}/edit`, bookData);
};

export const getBookById = (bookId) => {
  return api.get(`/books/${bookId}`);
};

export const deleteBook = (bookId) => {
  return api.delete(`/books/${bookId}`);
};
