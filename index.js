function renderProduct(productData){
    const product = document.createElement('article')
    product.classList.add('article')
    product.id = `aricle-${productData.id}`

    const name = document.createElement('h3')
    name.classList.add('name-tile')
    name.textContent = productData.name

    const quantity = document.createElement('h4')
    quantity.classList.add('quantity-content')
    quantity.innerHTML = productData.quantity

    const value = document.createElement('h5')
    value.classList.add('value')
    value.textContent = productData.value

    product.append(name, quantity, value)
    document.querySelector('#products').appendChild(product)

}

async function fetchProducts() {
    const products = await fetch("http://localhost:3000/products").then( res => res.json())
    products.forEach(renderProduct)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts()
})
 const form = document.querySelector('form')
 form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    
    const productData = {
        name: document.querySelector('#name').value,
        quantity: document.querySelector('#quantity').value,
        value: document.querySelector('#value').value
    }
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'content-Typ': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    const savedProduct = await response.json()
    form.reset()
    renderProduct(savedProduct)

    console.log(savedProduct)
 })