import React from "react";
import Navbar from "./Navbar"; // Pastikan Navbar diimport dengan benar

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      {/* Tambahkan margin-top atau padding-top agar konten tidak tertabrak navbar */}
      <div className="container mt-6">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box has-text-centered">
              <h1 className="title has-text-centered">Perpustakaan Gunadarma</h1>
              <p className="subtitle has-text-centered">
                Sistem Manajemen Perpustakaan
              </p>
              <div className="content has-text-centered">
                <p>
                  Di sini Anda dapat mengelola data Anggota, Buku, Pengguna, dan Transaksi.
                  Pilih menu di navbar untuk mulai mengelola.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
