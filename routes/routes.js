const {Router}=require("express")

const route = Router()

const user= require("../moduls/user/route")

route.use("/users", user)

module.exports = route