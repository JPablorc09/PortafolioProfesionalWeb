//Funcionalidad JavaScript 
  // Se selecciona el botón que permite alternar la previsualización del CV.
  const togglePreviewBtn = document.getElementById('togglePreview');

  // Se selecciona el contenedor donde se encuentra la previsualización del CV (el <div> que contiene el <embed> del PDF).
  const cvPreview = document.querySelector('.cv-preview');

  // Se agrega un 'escuchador de eventos' al botón (cuando se hace clic en el botón 'togglePreview').
  togglePreviewBtn.addEventListener('click', () => {
    
    // Verificamos el estado actual de la propiedad 'display' de la previsualización.
    // Si está en 'none' (oculto), lo cambiamos a 'block' (visible).
    // Si está en 'block' (visible), lo cambiamos a 'none' (oculto).
    cvPreview.style.display = cvPreview.style.display === 'none' ? 'block' : 'none';
  });
