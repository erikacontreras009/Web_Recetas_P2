document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos de entrada
    const form = document.getElementById("survey-form");
    const nombreInput = document.getElementById("Nom_Receta");
    const IngredientesInput = document.getElementById("Ingredientes");
    const PasosInput = document.getElementById("Pasos");
    
  
    // Agregar un controlador de eventos para enviar el formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Obtener los valores de los campos de entrada
      const nombre = nombreInput.value;
      const Ingredientes = IngredientesInput.value;
      const Pasos = PasosInput.value;
      

      // Validar que los campos no estén vacíos
      if (nombre.trim() === "" || Ingredientes.trim() === "" || Pasos.trim() === "" ) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Guardar los datos en el Local Storage
      saveDataToLocalStorage(nombre, Ingredientes, Pasos);
  
      // Reiniciar los campos del formulario
      form.reset();
    });
  
    // Función para guardar los datos en el Local Storage
    function saveDataToLocalStorage(nombre, Ingredientes, Pasos) {
      // Obtener los datos anteriores del Local Storage
      let storedData = localStorage.getItem("surveyData");
      if (storedData === null) {
        storedData = [];
      } else {
        storedData = JSON.parse(storedData);
      }
  
      // Agregar los nuevos datos a la lista
      storedData.push({ nombre, Ingredientes, Pasos});
  
      // Guardar la lista actualizada en el Local Storage
      localStorage.setItem("surveyData", JSON.stringify(storedData));
    }
  });
  