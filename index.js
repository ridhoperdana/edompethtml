const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.use(express.static('html'));

app.listen(3000, () => console.log('edompet web app listening on port 3000!'));