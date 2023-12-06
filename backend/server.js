// server.js

const express = require('express');
const app = express();
const port = 5500;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const tips = [
    'Stay hydrated during workouts.',
    'Warm up before exercising to prevent injuries.',
    'Get enough sleep for optimal muscle recovery.',
    // Add more tips as needed
];

app.get('/api/tips', (req, res) => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];
    res.json({ tip: randomTip });
});
