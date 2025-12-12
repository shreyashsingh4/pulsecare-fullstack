import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.post('/slot', async (req, res) => {
  try {
    const { doctor_id, start_time, end_time, total_capacity } = req.body;

    const result = await pool.query(
      `INSERT INTO slots (doctor_id, start_time, end_time, total_capacity, booked_count)
       VALUES ($1, $2, $3, $4, 0)
       RETURNING *`,
      [doctor_id, start_time, end_time, total_capacity]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("ERROR inserting slot:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/slots', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM slots');
    res.json(result.rows);
  } catch (err) {
    console.error("ERROR fetching slots:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

