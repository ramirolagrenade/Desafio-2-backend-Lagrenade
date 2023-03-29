import fs from 'fs'
import { title } from 'process'

class ProductManager {

    constructor() {
        this.path = './products.json'
    }


    getProducts = async () => {

        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            const products = JSON.parse(data)
            return products
        }
        else {
            return []
        }
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        let products = await this.getProducts()

        let idProducto = products.length

        let productos = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: idProducto + 1
        }

        products.push(productos)

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'))

    }


    getProductById = async (IdProducto) => {
        let products = await this.getProducts()

        let proId = products.find(product => product.id === IdProducto)

        if (proId) {
            return proId
        } else {
            return console.log('Id no Encontrado')
        }
    }

    deleteProduct = async () => {
        await fs.promises.unlink(this.path)
    }

    updateProduct = async (IdProducto, propiedad, update) => {

        let product = await this.getProducts()

        let producto = product.find(producto => producto.id === IdProducto)

        if (propiedad === 'title') {

            producto.title = update

            product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        }

        if (propiedad === 'description') {

            producto.description = update

            product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        }

        if (propiedad === 'price') {

            producto.price = update

            product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        }

        if (propiedad === 'thumbnail') {

            producto.thumbnail = update

            product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        }

        if (propiedad === 'code') {

            producto.code = update

            product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        }

        if (propiedad === 'stock') {

            producto.stock = update

            product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        }

    }

}




const productManager = new ProductManager('products.json')

const test = async () => {

    //Añadimos los productos al archivo json.

    await productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)

    await productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)

    await productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)

    //Visualizamos los productos subidos al archivo.

    console.log(await productManager.getProducts())

    // modificamos el contenido de algun producto espesifico por su id
    
    await productManager.updateProduct(3, 'title', 'wafle')
    
    await productManager.updateProduct(3, 'stock', 2)

    // vemos un producto en concreto mediante su id
    
    console.log(await productManager.getProductById(3))
    
    // eliminamos el json que contiene los productos

    // productManager.deleteProduct()

}

test()