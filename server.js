const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
// Backend code (Node.js with Express)

// Define a route to handle GET requests
app.get('/', (req, res) => {
  // Dummy data for illustration purposes
  const data = { message: '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' };
  res.json(data);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
