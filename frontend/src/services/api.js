import axios from 'axios';

const API_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Menambahkan token yang ada di localStorage ke setiap request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAnggota = () => api.get('/api/anggota');
export const createAnggota = (data) => api.post('/api/anggota', data);
export const updateAnggota = (id, data) => api.put(`/api/anggota/${id}`, data);
export const deleteAnggota = (id) => api.delete(`/api/anggota/${id}`);

export const getTransaksi = () => api.get('/transaksi');
export const createTransaksi = (data) => api.post('/transaksi', data);
export const updateTransaksi = (id, data) => api.put(`/transaksi/${id}`, data);
export const deleteTransaksi = (id) => api.delete(`/transaksi/${id}`);

export const getBuku = () => api.get('/buku');
export const createBuku = (data) => api.post('/buku', data);
export const updateBuku = (id, data) => api.put(`/buku/${id}`, data);
export const deleteBuku = (id) => api.delete(`/buku/${id}`);

export const getPengguna = () => api.get('/pengguna');
export const createPengguna = (data) => api.post('/pengguna', data);
export const updatePengguna = (id, data) => api.put(`/pengguna/${id}`, data);
export const deletePengguna = (id) => api.delete(`/pengguna/${id}`);
