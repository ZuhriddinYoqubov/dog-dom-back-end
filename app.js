const express = require("express")
const PORT = process.env.PORT || 7777
const morgan = require('morgan');

// routes
const users = require('./routes/user_route');
const home = require('./routes/home_route');


//mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test').then(()=>{
    console.log('ok');
}).catch((err) => {
    console.log(err);
})

// server
const app = express()

app.use(express.json())
app.use(express.static('public'));
app.use(morgan('tiny'));

app.use('/users', users);
app.use('/', home);

app.listen(PORT , ()=>{console.log(PORT);})
