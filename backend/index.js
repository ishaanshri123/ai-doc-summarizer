// Importing required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Use port from environment variable or default to 3001

// Enable CORS to allow cross-origin requests
app.use(cors());

// Define a simple GET route
app.get('/', (req, res) => {
    res.send('Backend API is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
