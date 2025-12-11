const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send("<h1>Hello from Jenkins Node.js Project!</h1>");
});

// API route
app.get('/api/message', (req, res) => {
    res.json({ message: "Pipeline working successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
