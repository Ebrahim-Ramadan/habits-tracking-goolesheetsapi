const express = require('express');
const { google } = require('googleapis');
const { authorize, listMajors } = require('./index'); // Import authorize and listMajors functions from index.js

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Welcome to the Google Sheets API Example');
// });
  
app.get('/api/data', async (req, res) => {
  try {
    const {authClient} = await authorize();
    const rows = await listMajors(authClient);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
