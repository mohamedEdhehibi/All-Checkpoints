const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const personRoutes = require('./routes/personRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/people', personRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
