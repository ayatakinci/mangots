const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());


app.get('/api/clothes', (req, res) => {
    res.json(require('../clothes.json'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
