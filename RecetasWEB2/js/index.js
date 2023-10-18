document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos de entrada
    const form = document.getElementById("survey-form");
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");
    const opinionInput = document.getElementById("opinion");
    const enlaceInput = document.getElementById("enlace");
  
    // Agregar un controlador de eventos para enviar el formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Obtener los valores de los campos de entrada
      const nombre = nombreInput.value;
      const edad = edadInput.value;
      const opinion = opinionInput.value;
      const enlace = enlaceInput.value;
  
      // Validar que los campos no estén vacíos
      if (nombre.trim() === "" || edad.trim() === "" || opinion.trim() === "" || enlace.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Guardar los datos en el Local Storage
      saveDataToLocalStorage(nombre, edad, opinion, enlace);
  
      // Reiniciar los campos del formulario
      form.reset();
    });
  
    // Función para guardar los datos en el Local Storage
    function saveDataToLocalStorage(nombre, edad, opinion, enlace) {
      // Obtener los datos anteriores del Local Storage
      let storedData = localStorage.getItem("surveyData");
      if (storedData === null) {
        storedData = [];
      } else {
        storedData = JSON.parse(storedData);
      }
  
      // Agregar los nuevos datos a la lista
      storedData.push({ nombre, edad, opinion, enlace });
  
      // Guardar la lista actualizada en el Local Storage
      localStorage.setItem("surveyData", JSON.stringify(storedData));
    }
  });
  