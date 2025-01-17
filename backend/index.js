import express from "express";
import cors from "cors";
import AnggotaRoute from "./routes/AnggotaRoute.js";
import BukuRoute from "./routes/BukuRoute.js";
import TransaksiRoute from "./routes/TransaksiRoute.js";


const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());


app.use(AnggotaRoute);
app.use(BukuRoute);
app.use(TransaksiRoute);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
