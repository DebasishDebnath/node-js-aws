const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from EC2 Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
