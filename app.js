class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let producto = this.products.find((product) => product.id == id);
        if(producto) return producto; else return 'Producto no encontrado';
    }

    addProduct( {title, description, price, thumbnail, code, stock} ) {
        if( title && description && price && thumbnail && code && stock ) {
            const product = {
                id: this.id,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
            }

            const productExist = this.products.find((p) => p.code == product.code);

            if(!productExist) {
                this.id++;
                this.products.push(product);
                return 'Producto añadido de forma exitosa';
            } else {
                return `Ya existe un producto con el código ${productExist.code}`;
            }
        } else {
            return 'Todos los campos son requeridos';
        }
    }
}

/* TESTING */
const productManager = new ProductManager();


let newProduct = {
    title: 'Placa de video 1',
    description: 'Placa de video nvidia 3060',
    price: 40000,
    thumbnail: "Sinimagen",
    code: '454',
    stock: 3,
};
let newProduct2 = {
    title: 'Placa de video 2',
    description: 'Placa de video nvidia 2060super',
    price: 25000,
    thumbnail: "Sinimagen",
    code: '455',
    stock: 3,
};
let newProduct3 = {
    title: 'Placa de video 3',
    description: 'Placa de video nvidia 3090',
    price: 75000,
    thumbnail: "Sinimagen",
    code: '456',
    stock: 3,
};

console.log('Get productos Inicio: ',productManager.getProducts());
console.log(productManager.addProduct(newProduct));
console.log(productManager.addProduct(newProduct2));
console.log(productManager.addProduct(newProduct));
console.log(productManager.addProduct(newProduct3));
console.log('Get productos Fin: ',productManager.getProducts());
console.log('Get producto by id: ',productManager.getProductById(2));