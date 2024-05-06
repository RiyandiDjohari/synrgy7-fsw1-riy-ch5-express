require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Router = require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(Router);

app.get('/views', (req, res) => {
    const { name, age, address } = req.query;

    res.render('index', ({
        name, 
        age, 
        address
    }))
})

app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
})

