document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let mensaje = document.getElementById('mensaje');

    const nombre = document.getElementById('Nombreinput').value.trim();
    const rut = document.getElementById('Rutinput').value.trim();
    const email = document.getElementById('emailinput').value.trim();
    const password = document.getElementById('inputPass').value.trim();
    const direccion = document.getElementById('inputAddress').value.trim();
    const telefono = document.getElementById('Telefonoinput').value.trim();
    const region = document.getElementById('Regioninput').value.trim();
    const comuna = document.getElementById('Comunainput').value.trim();
    const acepto = document.getElementById('checkTerms').checked;

    if (!nombre || !rut || !email || !password || !direccion || !telefono || !region || !comuna || !acepto) {
        mensaje.textContent = 'Por favor, complete todos los campos y acepte los términos.';
        mensaje.className = 'text-danger';
        return;
    }

    const nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombrePattern.test(nombre)) {
        mensaje.textContent = 'El nombre solo debe contener letras.';
        mensaje.className = 'text-danger';
        return;
    }

    const rutPattern = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]{1}$/;
    if (!rutPattern.test(rut)) {
        mensaje.textContent = 'El RUT debe tener el formato 12.345.678-9.';
        mensaje.className = 'text-danger';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        mensaje.textContent = 'El correo no es válido.';
        mensaje.className = 'text-danger';
        return;
    }

    if (password.length < 7) {
        mensaje.textContent = 'La contraseña debe tener al menos 7 caracteres.';
        mensaje.className = 'text-danger';
        return;
    }

    const telefonoPattern = /^[0-9]{8,15}$/;
    if (!telefonoPattern.test(telefono)) {
        mensaje.textContent = 'El número de teléfono debe tener entre 8 y 15 dígitos.';
        mensaje.className = 'text-danger';
        return;
    }

    if (region === "") {
        mensaje.textContent = 'Debe seleccionar una región.';
        mensaje.className = 'text-danger';
        return;
    }
    if (comuna === "") {
        mensaje.textContent = 'Debe ingresar una comuna.';
        mensaje.className = 'text-danger';
        return;
    }

    mensaje.textContent = '¡Registro exitoso! Te has registrado correctamente.';
    mensaje.className = 'text-success';

    //Dirige al Index despues de un segundo
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
});
