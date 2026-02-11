// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');

// // Load environment variables from .env
// dotenv.config();

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON request bodies

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/bookings', require('./routes/bookings'));
// const reviewRoutes = require('./routes/reviews');
// app.use('/api/reviews', reviewRoutes);
// const contactRoute = require('./routes/contact');
// app.use('/api/contact', contactRoute);

// // Catch-all route for unknown endpoints (optional but helpful)
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/contact', require('./routes/contact'));  // ✅ Contact route

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
