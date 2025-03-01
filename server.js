const express = require("express"); // importin Express
const PORT = 3000; // Set the port number
const axios = require('axios');
const app = express(); // Creatig the Express ap application and storing it in a variable called app

app.use(express.json()); // middleware for request body parsing

// Simulated localStorage using an in-memory object
let Storage = [];

// Handle GET request
app.get('/evans', (req, res) => {
    res.send('My Name is Evans,Sir!');
  });

  app.post("/001", (req, res) => {
    let body = req.body
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

// Store data in localStorage 
app.post('/store', (req, res) => {
    console.log("Receieved:", req.body);
    const { key, value } = req.body;
    if (!key || !value) {
        return res.status(400).json({ message: 'Key and value are required' });
    }
    localStorage[key] = value;
    res.json({ message: 'Data stored successfully', data: { key, value } });
});

// Retrieve data from localStorage
app.get('/retrieve/:key', (req, res) => {
    const key = req.params.key;
    if (!localStorage[key]) {
        return res.status(404).json({ message: 'Key not found' });
    }
    res.json({ key, value: localStorage[key] });
});


//Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
