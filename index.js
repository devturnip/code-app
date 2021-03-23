require('dotenv').config();
const express = require('express');
const app = express();
const ResultRoutes = require('./routes/results');

app.use("/api/results", ResultRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
});

//port 3000 or some env var
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));