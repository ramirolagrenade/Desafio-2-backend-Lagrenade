import fs from 'fs'

class ProductManager {

    constructor() {
        this.path = './Product.json'
        this.product = []
    }


    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            const products = JSON.parse(data)
            // this.product = JSON.parse(data)
            return products
        }
        else {
            return []
        }
    }

    getId = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            const products = JSON.parse(data)
            // this.product = products
            console.log(products.length)
            return products.length
        }
        else {
            return 0
        }
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        this.product = await this.getProducts()

        let idProducto = this.product.length

        let productos = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++idProducto
        }

        if (idProducto === 1) {
            // this.product.push(productos)
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, '\t'))
        }
        else {
            // this.product.push(productos)
            await fs.promises.appendFile(this.path, JSON.stringify(productos, null, '\t'))
        }

        this.product.push(productos)


    }


    getProductById = async (IdProducto) => {
        let contenido = await fs.promises.readFile(this.path, 'utf-8')

        let proId = contenido.find(producto => producto.id === IdProducto)

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

        this.product = this.getProducts()

        let producto = this.product.find(producto => producto.id === IdProducto)

        if (propiedad === 'title') {

            producto.title = update

            this.product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(this.product, null, '\t'))
        }

        if (propiedad === 'description') {

            producto.description = update

            this.product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(this.product, null, '\t'))
        }

        if (propiedad === 'price') {

            producto.price = update

            this.product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(this.product, null, '\t'))
        }

        if (propiedad === 'thumbnail') {

            producto.thumbnail = update

            this.product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(this.product, null, '\t'))
        }

        if (propiedad === 'code') {

            producto.code = update

            this.product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(this.product, null, '\t'))
        }

        if (propiedad === 'stock') {

            producto.stock = update

            this.product.splice(IdProducto - 1, 1, producto)

            await fs.promises.writeFile(this.path, JSON.stringify(this.product, null, '\t'))
        }

    }

}

const productManager = new ProductManager()

productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)
productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)
productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)

// console.log(productManager.getProducts())

// productManager.deleteProduct()



