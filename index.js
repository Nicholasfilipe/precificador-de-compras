function addProduct() {
    const quantity = document.getElementById("quantity").value
    const name = document.getElementById("name").value
    const value = document.getElementById("value").value
  
    const confirmation = confirm("Adicionar " + name + " com a quantidade " + quantity + "?")
  
    if (confirmation) {
      const products = document.getElementById("products")
      const productItem = document.createElement("div")
      const productName = document.createElement('p')
      const productquantity = document.createElement('p')
      const productvalue = document.createElement('p')  
      productItem.id = "product-" + name    
      productItem.innerText = name + ": " + quantity + " " + "R$" + value
      productItem.appendChild(productName)
      productItem.appendChild(productvalue)
      productItem.appendChild(productquantity)
      products.appendChild(productItem)
  
      document.getElementById("quantity").value = ""
      document.getElementById("name").value = ""
      document.getElementById("value").value = ""
    }
  }

  function removeProduct() {
    const number = document.getElementById("nameToRemove").value
    const productToRemove = document.getElementById("product-" + number)
  
    const confirmation = confirm("Remover o produto " + productToRemove.innerText + "?")
  
    if (confirmation) {
      document.getElementById("products").removeChild(productToRemove)
      document.getElementById("nameToRemove").value = ""
    }
  }