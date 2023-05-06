let tareas = [];

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputId = document.querySelector("#id");
  const inputText = document.querySelector("#text");
  tareas.push({
    id: Date.now(),
    text: inputText.value,
    complete: false,
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
  inputText.value = "";
  console.log(tareas);
});
