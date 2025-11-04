import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.get("/", async (_, res) => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY id DESC");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO posts (name, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  res.json(rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    "DELETE FROM posts WHERE id = $1 RETURNING *",
    [id]
  );
  res.json(rows[0]);
});

export default router;
