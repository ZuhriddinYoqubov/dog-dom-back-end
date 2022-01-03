const User = require("./schema")

module.exports = {
    // get all users
    GET: async (req, res) => {
        console.log(req.params.id);
    
        const users = await User.find()
    
        res.json(users);
    },
    //signUp uchun
    SIGNUP:async (req, res) => {
        const newUser = {
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone
        }
    
        const oldUser = await User.findOne({ phone: req.body.phone })
    
        if (oldUser) {
            res.json("bunday user phone bor!")
        } else {
    
            const user = new User(newUser)
            const saveUser = await user.save()
    
            res.json(saveUser);
        }
    },
    //login uchun 
    LOGIN:async (req, res) => {
        const newUser = {
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone
        }
    
        const oldUser = await User.findOne(newUser)
    console.log(oldUser);
        if(oldUser){
            res.status(200).json('succesfull')
        }else{
            res.json("error")
        }
    }

}
