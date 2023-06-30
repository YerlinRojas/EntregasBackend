import {Router} from 'express'
import ProductManager from '../manager/product.manager.js'

const router = Router()
const productManager = new ProductManager()

router.get('./', async(req,res)=>{
    res.send(productManager.getProduct())
})

export default router
