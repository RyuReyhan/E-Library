import React, { useEffect, useState } from 'react';
import { getTransaksi, createTransaksi, updateTransaksi, deleteTransaksi } from '../services/api';

const Transaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [newTransaksi, setNewTransaksi] = useState({
    judul: '', nama: '', tanggal_pinjam: '', tanggal_kembali: '', status: '', terlambat: 0
  });
  const [editing, setEditing] = useState(false);
  const [currentTransaksi, setCurrentTransaksi] = useState(null);

  useEffect(() => {
    fetchTransaksi();
  }, []);

  const fetchTransaksi = async () => {
    const { data } = await getTransaksi();
    // Format tanggal dan tambahkan nama hari
    const formattedData = data.map(item => {
      const tanggalPinjam = new Date(item.tanggal_pinjam);
      const tanggalKembali = new Date(item.tanggal_kembali);
      // Format tanggal dengan nama hari
      const formattedPinjam = tanggalPinjam.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
      const formattedKembali = tanggalKembali.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
      
      return {
        ...item,
        tanggal_pinjam: formattedPinjam,
        tanggal_kembali: formattedKembali
      };
    });
    setTransaksi(formattedData);
  };

  const handleChange = (e) => {
    setNewTransaksi({ ...newTransaksi, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateTransaksi(currentTransaksi.id, newTransaksi);
      setEditing(false);
      setCurrentTransaksi(null);
    } else {
      await createTransaksi(newTransaksi);
    }
    fetchTransaksi();
    setNewTransaksi({
      judul: '', nama: '', tanggal_pinjam: '', tanggal_kembali: '', status: '', terlambat: 0
    });
  };

  const handleEdit = (transaksi) => {
    setEditing(true);
    setCurrentTransaksi(transaksi);
    setNewTransaksi(transaksi);
  };

  const handleDelete = async (id) => {
    await deleteTransaksi(id);
    fetchTransaksi();
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

     

      <h2 className="title is-5">Daftar Transaksi</h2>
      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th>Judul Buku</th>
            <th>Nama Peminjam</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Status</th>
            <th>Terlambat</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transaksi.map((item) => (
            <tr key={item.id}>
              <td>{item.judul}</td>
              <td>{item.nama}</td>
              <td>{item.tanggal_pinjam}</td>
              <td>{item.tanggal_kembali}</td>
              <td>{item.status}</td>
              <td>{item.terlambat}</td>
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

      <h2 className="title is-5">Tambah/Edit Transaksi</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Judul Buku</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="judul"
              value={newTransaksi.judul}
              onChange={handleChange}
              placeholder="Judul Buku"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Nama Peminjam</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="nama"
              value={newTransaksi.nama}
              onChange={handleChange}
              placeholder="Nama Peminjam"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Tanggal Pinjam</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="tanggal_pinjam"
              value={newTransaksi.tanggal_pinjam.split(' ')[1] || newTransaksi.tanggal_pinjam}
              onChange={handleChange}
              placeholder="Tanggal Pinjam"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Tanggal Kembali</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="tanggal_kembali"
              value={newTransaksi.tanggal_kembali.split(' ')[1] || newTransaksi.tanggal_kembali}
              onChange={handleChange}
              placeholder="Tanggal Kembali"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Status</label>
          <div className="control">
            <div className="select">
              <select
                name="status"
                value={newTransaksi.status}
                onChange={handleChange}
              >
                <option value="Dipinjam">Dipinjam</option>
                <option value="Terlambat">Terlambat</option>
                <option value="Dikembalikan">Dikembalikan</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Terlambat</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="terlambat"
              value={newTransaksi.terlambat}
              onChange={handleChange}
              placeholder="Terlambat"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary">
              {editing ? "Update Transaksi" : "Tambah Transaksi"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Transaksi;
