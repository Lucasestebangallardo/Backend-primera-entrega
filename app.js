
const fs = require('fs')

class ProductManager {
    static id = 0;
    constructor(title, description, price, thumbnail, stock, path) {
        this.products = []
        this.code = ProductManager.id++;
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
        this.path = path
    }
    writeFileProducts() {
        fs.writeFile('products.json', JSON.stringify(this.products),
            (err) => {
                if (err) throw err;
                console.log('agregado con exito')
            }
        )
    }
    readFileProducts() {
        fs.readFile('products.json', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(console.log(JSON.parse(data)))
        })
    }
    addProduct(product) {
        let codeUsed = this.products.some(item => item.code === product.code)

        // agregar un producto
        if (product.title && product.description && product.price && product.thumbnail && product.code && product.stock && !codeUsed) {
            this.products.push({
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock,
            })
            console.log(`Producto ${product.title} agregado`)
            // console.log('Productos...', this.products)
        } else {
            console.error(`Error: Code repetido. El code ${product.code} ya esta en uso`)
        }
    }
    getProducts() {
        //retornar todos lo productos
        return this.products
    }
    getProductById(id) {
        // retornar el producto que cuente con este id
        let productFound = this.products.find(prod => prod.code === id)
        if (productFound) {
            return productFound
        } else {
            console.error(`no product found with id ${id}`)
        }
    }
    deleteProduct(id) {
        let arrayVacio = []
        this.products.map((product) => {
            if (product.code !== id) arrayVacio.push(product)


            fs.writeFile('products.json', JSON.stringify(arrayVacio),
                (err) => {
                    if (err) throw err;
                    console.log(`producto con el ${id} eliminado con exito`)
                })
        })
    }
    updateFile(id, obj) {
        this.products.map((product) => {
            if (product.code === id) {
                product.title = obj.title;
                product.description = obj.description;
                product.price = obj.price;
                product.thumbnail = obj.thumbnail;
                product.code = id;
                product.stock = obj.stock;
            }
            fs.writeFile('products.json', JSON.stringify(this.products),
                (err) => {
                    if (err) throw err;
                    console.log(`producto con el ${id} actualizado con exito`)
                })
        })
    }

}


const gestionProd = new ProductManager()

// Creación Productos
const placa = new ProductManager('Placa de video', 'Placa de video nvidia 3060', 14000, 'sin imagen', 23)
const placa2 = new ProductManager('Placa de video 2', 'Placa de video nvidia 2060super', 25000, 'sin imagen', 30)
const placa3 = new ProductManager('Placa de video 3', 'Placa de video nvidia 3090', 190000, 'sin imagen', 19)


// TEST

gestionProd.addProduct(placa)
gestionProd.addProduct(placa2)
gestionProd.addProduct(placa3)


console.log(gestionProd.getProducts())

// Hago uso de la funcion getProducts para ver cuantos productos tengo en el array products
/*  console.table(gestionProd.getProducts()) */





