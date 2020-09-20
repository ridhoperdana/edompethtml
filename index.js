const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('App running!');
});

app.use(express.static('html'));

app.listen(3000, () => console.log('edompet web app listening on port 3000!'));