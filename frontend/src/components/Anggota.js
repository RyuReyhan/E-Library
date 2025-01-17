import React, { useState, useEffect } from "react";
import axios from "axios";

const Anggota = () => {
  const [anggota, setAnggota] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    npm: "",
    tempat_lahir: "",
    jenis_kelamin: "",
    program_studi: "",
  });

  // Ambil data anggota dari API
  const fetchAnggota = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/anggota");
      setAnggota(response.data); // Mengupdate state anggota dengan data yang diterima
    } catch (error) {
      console.error("Error fetching anggota data", error);
    }
  };

  useEffect(() => {
    fetchAnggota();
  }, []);

  // Fungsi untuk menambahkan anggota
  const handleAddAnggota = async () => {
    try {
      await axios.post("http://localhost:5000/api/anggota", formData);
      fetchAnggota(); // Ambil data terbaru setelah menambah anggota
      setFormData({
        nama: "",
        npm: "",
        tempat_lahir: "",
        jenis_kelamin: "",
        program_studi: "",
      }); // Reset form setelah submit
    } catch (error) {
      console.error("Error adding anggota", error);
    }
  };

  // Fungsi untuk mengupdate anggota
  const handleUpdateAnggota = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/anggota/${id}`, formData);
      fetchAnggota(); // Ambil data terbaru setelah mengupdate anggota
      setFormData({
        nama: "",
        npm: "",
        tempat_lahir: "",
        jenis_kelamin: "",
        program_studi: "",
      }); // Reset form setelah submit
    } catch (error) {
      console.error("Error updating anggota", error);
    }
  };

  // Fungsi untuk menghapus anggota
  const handleDeleteAnggota = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/anggota/${id}`);
      fetchAnggota(); // Ambil data terbaru setelah menghapus anggota
    } catch (error) {
      console.error("Error deleting anggota", error);
    }
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-narrow">
          <button
            className="button is-link is-small"
            onClick={() => window.history.back()} // Kembali ke halaman sebelumnya
          >
            Kembali
          </button>
        </div>
      </div>

      <h2 className="title is-4">Anggota List</h2>

      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NPM</th>
            <th>Tempat Lahir</th>
            <th>Jenis Kelamin</th>
            <th>Program Studi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {anggota.map((a) => (
            <tr key={a.id}>
              <td>{a.nama}</td>
              <td>{a.npm}</td>
              <td>{a.tempat_lahir}</td>
              <td>{a.jenis_kelamin}</td>
              <td>{a.program_studi}</td>
              <td>
                <button
                  className="button is-warning is-small"
                  onClick={() => setFormData(a)}
                >
                  Edit
                </button>
                <button
                  className="button is-danger is-small"
                  onClick={() => handleDeleteAnggota(a.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="title is-4">Add/Edit Anggota</h2>
      <div>
        <div className="field">
          <label className="label" htmlFor="nama">Nama Lengkap</label>
          <div className="control">
            <input
              id="nama"
              type="text"
              className="input"
              placeholder="Nama"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="npm">NPM</label>
          <div className="control">
            <input
              id="npm"
              type="text"
              className="input"
              placeholder="NPM"
              value={formData.npm}
              onChange={(e) => setFormData({ ...formData, npm: e.target.value })}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="tempat_lahir">Tempat Lahir</label>
          <div className="control">
            <input
              id="tempat_lahir"
              type="text"
              className="input"
              placeholder="Tempat Lahir"
              value={formData.tempat_lahir}
              onChange={(e) => setFormData({ ...formData, tempat_lahir: e.target.value })}
            />
          </div>
        </div>

        {/* Ubah input jenis kelamin menjadi dropdown */}
        <div className="field">
          <label className="label" htmlFor="jenis_kelamin">Jenis Kelamin</label>
          <div className="control">
            <div className="select">
              <select
                id="jenis_kelamin"
                value={formData.jenis_kelamin}
                onChange={(e) => setFormData({ ...formData, jenis_kelamin: e.target.value })}
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="program_studi">Jurusan</label>
          <div className="control">
            <input
              id="program_studi"
              type="text"
              className="input"
              placeholder="Program Studi"
              value={formData.program_studi}
              onChange={(e) => setFormData({ ...formData, program_studi: e.target.value })}
            />
          </div>
        </div>

        <button className="button is-primary" onClick={handleAddAnggota}>
          Add Anggota
        </button>
        {formData.id && (
          <button
            className="button is-link"
            onClick={() => handleUpdateAnggota(formData.id)}
          >
            Update Anggota
          </button>
        )}
      </div>
    </div>
  );
};

export default Anggota;
