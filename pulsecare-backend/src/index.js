import express from 'express';
import cors from 'cors';
import showRoutes from './routes/showRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/shows', showRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
