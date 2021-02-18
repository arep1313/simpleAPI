const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());



app.get('/', (req,res) => {
    res.send('This is home');
});

app.get('/api/addtwo', (req,res) => {
    try
    {
        if (!req.body.number1)
        {
            return res.status(400).send('Error 400');
        }
    
        if (!req.body.number2)
        {
            return res.status(400).send('Error 400');
        }
    
        console.log('F');
        console.log(req.body.number1);
        console.log(req.body.number2);
    
        var result = req.body.number1  + req.body.number2;
        console.log(result);
        res.status(200).send("La Suma es: " + result);

    }
    catch(err)
    {
        res.status(400).send("Hubo un error");
    }
});

app.get('/api/add', (req,res) => {
    try
    {
        if (!req.body.numbers)
        {
            return res.status(400).send('Error 400');
        }
        console.log('F');
        var numberarray = req.body.numbers;
        var result = 0;
        console.log(req.body.numbers);

        for (i in numberarray) {
            result += numberarray[i];
        }

        console.log(result);
        res.status(200).send("La Suma es: " + result);
    }
    catch(err)
    {
        res.status(400).send("Hubo un error");
    }
});

app.get('/api/avrg', (req,res) => {
    try
    {
        if (!req.body.numbers)
        {
            return res.status(400).send('Error 400');
        }
        console.log('F');
        var numberarray = req.body.numbers;
        var result = 0, cont = 0;
        console.log(req.body.numbers);

        for (i in numberarray) {
            result += numberarray[i];
            cont++;
        }
        result = result / cont;
        console.log(cont);
        res.status(200).send("El promedio es: " + result);
    }
    catch(err)
    {
        res.status(400).send("Hubo un error");
    }
});


app.listen(3000,() => {
    console.log('Listening on 3000');
})