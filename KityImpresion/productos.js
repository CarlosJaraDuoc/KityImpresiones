// Comprobar si el usuario está logueado
    if (!sessionStorage.getItem("loggedIn")) {
      alert("Debes iniciar sesión primero.");
      window.location.href = "index.html"; // Redirigir a la página de login si no está logueado
    }

    let cart = [];

    function addToCart(product) {
      // Buscar si el producto ya existe en el carrito
      const existingProduct = cart.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1; // Si ya existe, aumentamos la cantidad
      } else {
        product.quantity = 1; // Si no existe, lo añadimos con cantidad 1
        cart.push(product);
      }
      updateCart();
    }

    function updateCart() {
      const cartDiv = document.getElementById("cart");
      cartDiv.innerHTML = ""; // Limpiar contenido previo

      let total = 0;
      cart.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("cart-items");
        
        const productText = document.createElement("p");
        productText.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
        productElement.appendChild(productText);
        
        // Botón para eliminar producto
        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "btn-sm");
        removeButton.textContent = "Quitar";
        removeButton.onclick = function() {
          removeFromCart(index);
        };
        productElement.appendChild(removeButton);
        
        cartDiv.appendChild(productElement);
        total += product.price * product.quantity; // Multiplicamos precio por la cantidad
      });

      // Mostrar total
      const totalElement = document.createElement("p");
      totalElement.textContent = `Total: $${total}`;
      cartDiv.appendChild(totalElement);

      // Botón para vaciar carrito (siempre visible)
      const clearCartButton = document.createElement("button");
      clearCartButton.classList.add("btn", "btn-danger");
      clearCartButton.textContent = "Vaciar carrito";
      clearCartButton.onclick = clearCart;
      cartDiv.appendChild(clearCartButton);
    }

    function clearCart() {
      cart = [];
      updateCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1); // Eliminar el producto del carrito
      updateCart(); // Actualizar la vista del carrito
    }