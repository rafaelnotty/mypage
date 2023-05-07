const form = document.querySelector('#formulario-contacto');
const enviarCorreoBtn = document.querySelector('#enviar-correo');

enviarCorreoBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const mensaje = document.querySelector('#mensaje').value;

  fetch('enviar_correo.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, mensaje })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al enviar el correo electrónico');
    }
    alert('El correo electrónico ha sido enviado correctamente');
    form.reset();
  })
  .catch(error => {
    console.error(error);
    alert('Ocurrió un error al enviar el correo electrónico');
  });
});
