const {Router}=require("express")

const route = Router()

const controller= require("./controller")

route.get("/", controller.GET)
route.post("/register", controller.SIGNUP)
route.post("/login", controller.LOGIN)

module.exports = route