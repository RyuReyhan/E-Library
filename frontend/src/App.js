import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Anggota from "./components/Anggota";
import Buku from "./components/Buku";
import Transaksi from "./components/Transaksi";
import 'bulma/css/bulma.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);  // Set ke true untuk langsung masuk dashboard

  useEffect(() => {
    // Token akan dicek hanya jika dibutuhkan
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set true jika token ada
  }, []);

  return (
    <Router>
      <Routes>
        {/* Halaman utama langsung menuju dashboard jika sudah login */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/anggota" element={<Anggota />} />
        <Route path="/buku" element={<Buku />} />
        <Route path="/transaksi" element={<Transaksi />} />
      </Routes>
    </Router>
  );
};

export default App;
