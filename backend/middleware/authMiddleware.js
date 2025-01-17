import jwt from "jsonwebtoken";

// Middleware untuk memverifikasi token
export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ msg: "Access Denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], "secret_key");  // Pastikan secret key sama dengan saat pembuatan token
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid Token" });
  }
};

// Middleware untuk memverifikasi role admin
export const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Admin akses diperlukan" });
  }
  next();
};
