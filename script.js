// Animación al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Animación al hacer click en el botón de "Ver más"
const verMasBtn = document.querySelector('.ver-mas-btn');
const serviciosAdicionales = document.querySelector('.servicios-adicionales');
verMasBtn.addEventListener('click', function () {
  serviciosAdicionales.classList.toggle('show');
  verMasBtn.innerHTML =
    serviciosAdicionales.classList.contains('show') ? 'Ver menos' : 'Ver más';
});

// Envío de formulario de contacto
const form = document.querySelector('#contacto-form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const alerta = document.querySelector('.alerta');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (nombreInput.value.trim() === '' || emailInput.value.trim() === '' || mensajeInput.value.trim() === '') {
    alerta.classList.remove('hidden');
    alerta.textContent = 'Todos los campos son requeridos';
    return;
  }

  alerta.classList.add('hidden');
  alerta.textContent = '';

  const formData = new FormData(form);

  fetch(form.getAttribute('action'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData)
  })
    .then(function () {
      alerta.classList.remove('hidden');
      alerta.classList.add('success');
      alerta.textContent = 'Mensaje enviado correctamente';
    })
    .catch(function () {
      alerta.classList.remove('hidden');
      alerta.classList.add('error');
      alerta.textContent = 'Hubo un error al enviar el mensaje';
    })
    .finally(function () {
      form.reset();
      setTimeout(function () {
        alerta.classList.add('hidden');
        alerta.classList.remove('success', 'error');
      }, 5000);
    });
});
