require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Router = require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(Router);

app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
})
