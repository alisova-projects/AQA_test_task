/*
Составить алгоритм: если введенное число больше 7, то вывести “Привет”
*/

const refs = {
  input: document.querySelector("input#number-input"),
  h3: document.querySelector("h3#number-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let num = event.currentTarget.value;

  if (num > 7) {
    refs.h3.textContent = "Привет!";
  } else if (num <= 7 && num !== "") {
    refs.h3.textContent = "Это не совсем то, что нужно :)";
  } else if (isNaN(num)) {
    refs.h3.textContent = "Это не число!";
  } else if (num === "") {
    refs.h3.textContent = "Введите число";
  }
  return refs.h3.textContent;
}
