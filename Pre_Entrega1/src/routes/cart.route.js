import { Router } from "express";
import CartManager from "../manager/cart.manager.js";

const router = Router()
const cartManager = new CartManager()

router.post('/',async(req,res)=>{
    const result = await cartManager.createCart()
    res.send(result)
}) 

router.get('/:cid',async(req,res)=>{
    const cid = parseInt (req.params.cid)
    const result = await cartManager.getCartById(cid)
    res.send(result)
}) 


export default router