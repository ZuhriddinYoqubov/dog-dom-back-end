const express = require('express');
const router = express.Router();
const User = require("../schema/user")


// BARCHA USERLARNI KO'RISH
router.get('/', async (req, res) => {
    console.log(req.params.id);

    const users = await User.find()

    res.json(users);
});

// SIGN UP
router.post('/register', async (req, res) => {
    const newUser = {
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone
    }

    const oldUser = await User.findOne({ phone: req.body.phone })

    if (oldUser) {
        res.json("bu user phone bor basada!")
    } else {

        const user = new User(newUser)
        const sevUser = await user.save()

        res.json(sevUser);
    }
});

// SIGN IN
router.post('/login', async (req, res) => {
    // qayta yozish kerak
    const newUser = {
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone
    }

    const oldUser = await User.findOne(newUser)
console.log(oldUser);
    res.json("okkk")
    // if (oldUser.phone == newUser.phone && ) {
    //     res.json("bu user phone bor basada!")
    // } else {

    //     const user = new User(newUser)
    //     const sevUser = await user.save()

    //     res.json(sevUser);
    // }
});


module.exports = router;
