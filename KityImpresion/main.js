document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio cargado ✅");

  const formulario = document.getElementById("formContacto");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();

    // Validaciones básicas
    if (!nombre) {
      alert("Por favor ingresa tu nombre.");
      return;
    }
    if (!validarCorreo(correo)) {
      alert("Correo inválido. Ejemplo: usuario@dominio.com");
      return;
    }
    if (!/^\d{9,12}$/.test(whatsapp)) {
      alert("Número de WhatsApp inválido. Ejemplo: 56912345678");
      return;
    }

    console.log("Datos recibidos:", { nombre, correo, whatsapp });

    // abrir chat directo en WhatsApp con el cliente
    const urlWsp = `https://wa.me/${whatsapp}?text=Hola%20${nombre},%20gracias%20por%20contactar%20Kity%20Impresión.`;
    window.open(urlWsp, "_blank");

  });

  // Función de validación de correos
  function validarCorreo(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  }
});
