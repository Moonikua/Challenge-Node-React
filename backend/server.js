import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/posts", postsRoutes);

app.listen(5000, () => console.log("✅ Backend corriendo en http://localhost:5000"));
