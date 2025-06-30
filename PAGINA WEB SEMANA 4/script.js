// Validación del formulario
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        alert("¡Gracias por contactarnos!");
        form.reset();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();