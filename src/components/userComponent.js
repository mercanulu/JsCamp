import { BaseLogger, ElasticLogger } from "../crossCuttingConcers/logging.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")
let logger1=new ElasticLogger
let userService = new UserService(logger1)


let user1 = new User(1,"Mercan","Ulu","İstanbul");
let user2 = new User(2,"İlenay","Coşgun","İstanbul");
userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(1))


//prototyping
let customer = { id: 1, firstName: "Mercan" }
customer.lastName = "Ulu"
console.log(customer.lastName)
