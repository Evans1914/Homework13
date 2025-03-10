const express = require("express"); // Importing Express
const fs = require('fs');
const path = require('path');
const PORT = 3000; // Set the port number
const axios = require('axios');
const app = express(); // Creating the Express application and storing it in a variable called app

app.use(express.json()); // Middleware for request body parsing

// Path to the file where we will store data
const dataFile = path.join(__dirname, 'storage.json');

// Load data from the file
const loadData = () => {
    if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    }
    return {}; // Return an empty object if the file doesn't exist
};

// Save data to the file
const saveData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
};

// Handle GET request
app.get('/evans', (req, res) => {
    res.send('My Name is Evans, Sir!');
});

app.post("/001", (req, res) => {
    let body = req.body;
    res.send("Hey Evans!");
});

app.get('/test', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching test data', error: error.message });
    }
});

app.post("/api/cats", async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Store data in the "localStorage" (file-based storage)
app.post('/store', (req, res) => {
    const { key, value } = req.body;
    if (!key || !value) {
        return res.status(400).json({ message: 'Key and value are required' });
    }
    
    const data = loadData(); // Load existing data from the file
    data[key] = value; // Store the new key-value pair in memory
    saveData(data); // Save it back to the file
    
    res.json({ message: 'Data stored successfully', data: { key, value } });
});

// Retrieve data from the "localStorage" (file-based storage)
app.get('/retrieve/:key', (req, res) => {
    const key = req.params.key;
    const data = loadData(); // Load data from the file
    if (!data[key]) {
        return res.status(404).json({ message: 'Key not found' });
    }
    res.json({ key, value: data[key] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
