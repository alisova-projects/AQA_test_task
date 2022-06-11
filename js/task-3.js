/*
Составить алгоритм: на входе есть числовой массив, необходимо вывести элементы массива кратные 3
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function foo(arr) {
  console.log(arr);
  let newArr = [];
  // let arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

foo(arr);

// ------------------------------------------------------------------
//  пока не вышло реализовать заполнение массива данными с инпута, но я над этим ещё поработаю

// const inputEl = document.querySelector("input#array-input");

// inputEl.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   const str = event.currentTarget.value;
//   let arr = [];
//   let arr1 = str.split(",").push(arr1)
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }
