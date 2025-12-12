import express from "express";
import pool from "../db.js";

const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const { slot_id, patient_name } = req.body;

    
    const slotCheck = await pool.query(
      "SELECT * FROM slots WHERE id = $1",
      [slot_id]
    );

    if (slotCheck.rows.length === 0) {
      return res.status(404).json({ error: "Slot not found" });
    }

    const slot = slotCheck.rows[0];

    
    if (slot.booked_count >= slot.total_capacity) {
      return res.status(400).json({ error: "Slot is fully booked" });
    }

    
    const bookingResult = await pool.query(
      `INSERT INTO bookings (slot_id, patient_name)
       VALUES ($1, $2)
       RETURNING *`,
      [slot_id, patient_name]
    );

    
    await pool.query(
      `UPDATE slots
       SET booked_count = booked_count + 1
       WHERE id = $1`,
      [slot_id]
    );

    
    res.json({
      message: "Booking successful",
      booking: bookingResult.rows[0]
    });

  } catch (err) {
    console.error("BOOKING ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


router.get('/all', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    res.json(result.rows);
  } catch (err) {
    console.error("FETCH BOOKINGS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
