const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log("Root");
    res.send("<h1 style= 'color:red'> Home Page </h1>");
});

module.exports = router;


