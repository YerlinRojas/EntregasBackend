import { Router } from 'express'
import ProductManager from '../manager/product.manager.js'

const router = Router()
const productManager = new ProductManager()

router.get('/', async(req,res)=>{
    const result = await productManager.getProduct()
    res.send(result)
})

router.post('/', async(req,res)=>{
    const data = req.body
    const result = await productManager.addProduct(data)
    res.send(result)
})

router.get('/:pid', async(req,res)=>{
    const pid = parseInt(req.params.pid)
    const result = await productManager.getProductById(pid)
    res.send(result)
})  

router.put('/:pid', async(req,res)=>{
    const pid = parseInt(req.params.pid)
    const updatedFields = req.body
    console.log(pid)
    console.log(updatedFields)
    const result = await productManager.updateProduct(pid,updatedFields)
    res.send(result)
})



router.delete('/:pid', async(req,res)=>{
    const pid = parseInt(req.params.pid)
    const result = await productManager.deleteProduct(pid)
    res.send(result)
})


export default router
