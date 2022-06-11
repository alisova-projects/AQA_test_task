/*
Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"
*/

const refs = {
  input: document.querySelector("input#name-input"),
  h3: document.querySelector("h3#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let name = event.currentTarget.value;

  if (name.toLowerCase() === "вячеслав") {
    refs.h3.textContent = `Привет, ${name}`;
  } else if (name === "") {
    refs.h3.textContent = "";
  } else {
    refs.h3.textContent = "Нет такого имени";
  }
  return;
}
