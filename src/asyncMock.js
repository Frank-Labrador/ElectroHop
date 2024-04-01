const products = [
    {
        id:'1',
        name: 'Polera logo',
        price: 19,
        category: 'poleras',
        img: 'https://i.imgur.com/UiRkZPh.png',
        stock: 20,
        description: 'Polera Negra con el logo del canal'
    },
    {id:'2', name:'Cojin', price: 12, category:'accesorios', img:'https://i.imgur.com/L3Zqiaj.png', stock: 15, description:'Cojin negro con el logo'},
    {id:'3', name:'Poster logo', price: 5, category:'posters', img:'https://i.imgur.com/iAYQ73M.png', stock: 30, description:'Posters del logo, 1200x1200'}
]

export const getProducts =() =>{
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        resolve(products.find(prod=> prod.id === productId))
    },500)
}


export const getProductByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        resolve(products.filter(prod=> prod.category === categoryId))
    },500)
}