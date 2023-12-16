const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  try {
    const apiKey = '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'; // Replace with your actual API key
    const apiUrl = 'https://stanfy79.github.io/Chatbot-v1'; // Replace with the external API URL

    const response = await axios({
      method: req.body.method, // Assuming the client sends the HTTP method (GET, POST, etc.)
      url: `${apiUrl}${req.body.path}`,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      data: req.body.data,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

