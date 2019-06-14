const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    return res.json({ message: 'Hello everybody'})
})

app.get('/hello-world', (req, res) => {
    return res.json({
        message: 'Hello world!'
    })
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));