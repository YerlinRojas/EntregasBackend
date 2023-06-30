import FileManager from './file.manager'

export default class  cartProduct extends FileManager {

    constructor(){
       super('./carts.json') 
    } 
}