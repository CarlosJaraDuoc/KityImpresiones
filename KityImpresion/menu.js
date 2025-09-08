// Validación del formulario de login
    function validateLogin(event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Validación de correo
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(username)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
      }

      // Validación de contraseña (mínimo 7 caracteres)
      if (password.length < 7) {
        alert("La contraseña debe tener al menos 7 caracteres.");
        return false;
      }

      // Si todo es válido, mostrar la sección de productos
      alert("¡Login exitoso!");
      sessionStorage.setItem("loggedIn", "true"); // Simulando sesión
      document.getElementById("login-form").style.display = "none";
      document.getElementById("products-section").style.display = "block"; // Mostrar la sección de productos
      return true;
    }

    // Agregar producto al carrito
    let cart = [];

    function addToCart(product) {
      cart.push(product);
      updateCart();
    }

    function updateCart() {
      const cartDiv = document.getElementById("cart");
      cartDiv.innerHTML = "";

      let total = 0;
      cart.forEach(product => {
        const productElement = document.createElement("p");
        productElement.textContent = `${product.name} - $${product.price}`;
        cartDiv.appendChild(productElement);
        total += product.price;
      });

      const totalElement = document.createElement("p");
      totalElement.textContent = `Total: $${total}`;
      cartDiv.appendChild(totalElement);
    }

    function clearCart() {
      cart = [];
      updateCart();
    }