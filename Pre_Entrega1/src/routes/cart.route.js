import { Router } from "express";
import CartManager from "../manager/cart.manager.js";

const router = Router()
const cartManager = new CartManager()

router.post('/',async(req,res)=>{
    res.send(await cartManager.create())
}) 

