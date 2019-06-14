const express = require('express');
const app = express();
const PORT = 3001;

const CalClass = require('./utilities/calculator');

app.get('/', (req, res) => {
    return res.json({ message: 'Hello everybody'})
})

app.get('/hello-world', (req, res) => {
    return res.json({
        message: 'Hello world!'
    })
})

//Get Calculator
app.get('/cal/:cal/:numberA/:numberB', (req, res) => {
    const { cal, numberA, numberB} = req.params;
    if(isNaN(numberA) || isNaN(numberB))
        res.json({ message: 'param_not_valid'})
    let cal1 = new CalClass(cal.toUpperCase(), numberA, numberB);
    let resultCal = cal1._getResultCal();
    res.json(resultCal);
})
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));