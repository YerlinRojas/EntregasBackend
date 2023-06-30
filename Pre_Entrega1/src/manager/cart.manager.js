import FileManager from './file.manager'


export default class CartManager extends FileManager {
  constructor() {
    super('./carts.json')
  }

  create = async () => {
    const carts = {
      id: await this.getId(),
      products: []
    }
    return await this.write(carts)
  }
  
  getId = async () => {
    const listProduct = await this.create()
    const lastProduct = listProduct.length > 0 ? listProduct[listProduct.length - 1].id : 0
    return lastProduct + 1
  }
  
  add = async (cid, pid, quantity) => {
    const carts = await this.read();
    const cart = carts.find(cart => cart.id === cid);
    if (cart) {
      const product = cart.products.find(product => product.id === pid);
      if (product) {
        product.quantity += quantity; 
      } else {
        cart.products.push({
          id: pid,
          quantity: quantity
        });
      }
      await this.write(carts);
    } 
  }


}
