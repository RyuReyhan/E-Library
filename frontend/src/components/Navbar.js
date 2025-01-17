import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar is-primary is-fixed-top">
      <div className="navbar-brand">
        {/* Logo atau nama aplikasi (bisa disesuaikan) */}
        <Link to="/" className="navbar-item">
          <strong>Perpustakaan</strong>
        </Link>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/anggota" className="navbar-item">
            Data Anggota
          </Link>
          <Link to="/buku" className="navbar-item">
            Data Buku
          </Link>
          <Link to="/transaksi" className="navbar-item">
            Data Transaksi
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
