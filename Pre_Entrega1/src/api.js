import express from 'express'
import productRouter from './routes/product.route.js'

const app = express ()
app.use(express.json())

app.use('/api/products', productRouter)


  app.listen(8080, () => {
    console.log("Server runing on port 8080")
    })
  



























/* let products= []


//get products to limit or all
app.get('/api/products' , async(req,res)=>{
    try {
      const limit = parseInt(req.query.limit)
  
      if (limit && limit > 0) {
        const limitProduct = products.slice(0, limit)
        res.json(limitProduct)
      } else {
       res.json(products)
      }
  
    } catch (error) {
      res.status(500).json({status:'error', message: 'server error'})
    }
  })
  

  //get products to id. not found
  app.get('/api/products/:pid', async(req,res)=>{
    try {
      
      const pid = parseInt(req.params.pid)
      const productIndex = products.find(p => p.id === pid)
      if (productIndex)  {
        res.json(productIndex)
      } else {
        res.status(404).json({status: 'error', message:'ID invalid'})
      }
  
    } catch (error) {
      res.status(404).json({status:'error', message:'product not found'})
    }
  })
  
  //crear products con post
  app.post('/api/products', async(req, res)=>{
    //detalle de producto por body
    const {   title,
      description,
      price,
      categeory,
      thumbnail,
      code,
      stock} = req.body
      
      //funcion para generar id
      const id = await getId ()

      //crear obj del producto 
      const newProduct = {
        id: id,
        title,
        description,
        price,
        categeory,
        thumbnail,
        code,
        stock,
        status:true,
      }
        //pushear el obj de products
        products.push(newProduct)

        //verificar el post
        res.status(201).json({status:'succes', message:'se agrego', products: newProduct })

  })

 const getId = async() =>{
  const count = products.length
  if (count> 0) {
    return products[count -1].id + 1
  } else {
    return 1
  }
  }

    //put

    app.put('/api/products/:pid', async(req,res)=>{
      const pid = parseInt(req.params.pid)
      const updatedFields = req.body


      const product = products.find(p => p.id===pid)
      if (product<0){
        return res.status(404).json({status:'error', message:'Product not found'})
      }

      Object.keys(updatedFields).forEach((field) => {
        if (field !== 'pid') {
          product[field] = updatedFields[field];
        }
      })

      res.json({status:'succes', message:'Actualizo producto'})
    })

    //delete
    app.delete('/api/products/:pid', async(req,res)=>{
      const pid = parseInt(req.params.pid)

      const idparams = products.find(p => p.id === pid)
      if(!idparams){
        return res.status(404).json({status:'succes',message:'product not found'})
      }
      
      products = products.filter(p=> p.id !== pid)
      res.json({status:'succes',message:'Product eliminado'})

    })
  
  

    //CARRITO
let carts = []
//post 
app.post ('/api/carts', async(req,res)=>{

  try { 
  const id = await getId()
  const products = []

  const newProduct = {
    id:id,
    products
  }

  carts.push(newProduct)
  res.status(201).json({carts:newProduct })
    
  } catch (error) {
    res.status(404).json({status:'error', message:'error al generar carrito'})
  }

})

app.get('/api/carts/:cid', async(req,res)=>{

  const cid = parseInt(req.params.cid)
  const cartIndex = carts.find(c => c.id === cid)

  if (cartIndex){
    res.json(cartIndex)
  } else {
    res.status(404).json({status: 'error', message:'ID cart invalid'})
  }

})

//:cid/product/:pid 
//post
//La ruta POST  /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado, 
// agregándose como un objeto bajo el siguiente formato:
// product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
// quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.


app.post ('/api/carts/:cid/product/:pid', async (req,res)=>{
  const cid = parseInt (req.params.cid)
  const cartIndex = carts.find(c => c.id === cid)

  const pid = parseInt (req.params.pid)
  const productIndex = cartIndex.find(p => p.id === pid)
  
  })
 */




