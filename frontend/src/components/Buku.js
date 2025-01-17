import React, { useEffect, useState } from 'react';
import { getBuku, createBuku, updateBuku, deleteBuku } from '../services/api';

const Buku = () => {
  const [buku, setBuku] = useState([]);
  const [newBuku, setNewBuku] = useState({
    judul: '', pengarang: '', penerbit: '', jumlah_buku: ''
  });
  const [editing, setEditing] = useState(false);
  const [currentBuku, setCurrentBuku] = useState(null);

  useEffect(() => {
    fetchBuku();
  }, []);

  const fetchBuku = async () => {
    const { data } = await getBuku();
    setBuku(data);
  };

  const handleChange = (e) => {
    setNewBuku({ ...newBuku, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateBuku(currentBuku.id, newBuku);
      setEditing(false);
      setCurrentBuku(null);
    } else {
      await createBuku(newBuku);
    }
    fetchBuku();
    setNewBuku({ judul: '', pengarang: '', penerbit: '', jumlah_buku: '' });
  };

  const handleEdit = (buku) => {
    setEditing(true);
    setCurrentBuku(buku);
    setNewBuku(buku);
  };

  const handleDelete = async (id) => {
    await deleteBuku(id);
    fetchBuku();
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


      <h2 className="title is-5">Daftar Buku</h2>
      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Pengarang</th>
            <th>Penerbit</th>
            <th>Jumlah Buku</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((item) => (
            <tr key={item.id}>
              <td>{item.judul}</td>
              <td>{item.pengarang}</td>
              <td>{item.penerbit}</td>
              <td>{item.jumlah_buku}</td>
              <td>
                <button
                  className="button is-warning is-small"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="button is-danger is-small"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="title is-5">Tambah/Edit Buku</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Judul</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="judul"
              value={newBuku.judul}
              onChange={handleChange}
              placeholder="Judul Buku"
            />
          </div>
        </div>
        
        <div className="field">
          <label className="label">Pengarang</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="pengarang"
              value={newBuku.pengarang}
              onChange={handleChange}
              placeholder="Pengarang"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Penerbit</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="penerbit"
              value={newBuku.penerbit}
              onChange={handleChange}
              placeholder="Penerbit"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Jumlah Buku</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="jumlah_buku"
              value={newBuku.jumlah_buku}
              onChange={handleChange}
              placeholder="Jumlah Buku"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary">
              {editing ? "Update Buku" : "Tambah Buku"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Buku;
