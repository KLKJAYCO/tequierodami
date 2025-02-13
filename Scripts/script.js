document.addEventListener("DOMContentLoaded", function () {
    const fechaInput = document.getElementById("fecha");
  
    fechaInput.addEventListener("input", (e) => {
      let valorOriginal = fechaInput.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
      const cursorPos = fechaInput.selectionStart;
  
      let nuevoValor = valorOriginal;
      let nuevoCursorPos = cursorPos;
  
      // Formatear según el largo del valor
      if (valorOriginal.length > 2 && valorOriginal.length <= 4) {
        nuevoValor = `${valorOriginal.slice(0, 2)}/${valorOriginal.slice(2)}`;
      } else if (valorOriginal.length > 4) {
        nuevoValor = `${valorOriginal.slice(0, 2)}/${valorOriginal.slice(2, 4)}/${valorOriginal.slice(4, 8)}`;
      }
  
      // Ajustar posición del cursor si se agregó un '/'
      if (nuevoValor.length > fechaInput.value.length && cursorPos !== nuevoValor.length) {
        nuevoCursorPos++;
      }
  
      fechaInput.value = nuevoValor;
      fechaInput.setSelectionRange(nuevoCursorPos, nuevoCursorPos);
    });
  
    fechaInput.addEventListener("keydown", (e) => {
      // Evitar exceder el máximo de caracteres y manejar el Enter
      if ((fechaInput.value.length >= 10) && e.key !== "Backspace" && e.key !== "Delete" && e.key.length === 1) {
        e.preventDefault();
      }
  
      // Ejecutar validarFecha() al presionar Enter
      if (e.key === "Enter") {
        validarFecha();
      }
    });
  });
  
  function validarFecha() {
    // Fecha en la que se conocieron (27/08/2024)
    const fechaConocimiento = "27/08/2024";
  
    // Obtener la fecha ingresada por el usuario
    const fechaIngresada = document.getElementById("fecha").value.trim();
  
    // Seleccionar el elemento para mostrar el mensaje
    const mensaje = document.getElementById("mensaje");
  
    // Validar si la fecha ingresada coincide
    if (fechaIngresada === fechaConocimiento) {
      mensaje.textContent = "Muy Bien Amorcito ¡Adivinaste!.👩‍❤️‍💋‍👨";
      mensaje.className = "message success";

      // Mostrar el loader
      loader.style.display = "block";

      // Aplicar animación de desvanecimiento en el contenedor antes de redirigir
      setTimeout(function() {
        document.body.classList.add("fade-out");

      // Esperar 3 segundos antes de redirigir
      setTimeout(function() {
        window.location.href = "pagina2.html"; // Redirige a la otra página
        }, 1000);
      }, 5000); // 5000 ms = 5 segundos
    } else {
      mensaje.textContent = "Auch!! Y Asi Dices Que Me Quieres.😞";
      mensaje.className = "message error";
    }
  }