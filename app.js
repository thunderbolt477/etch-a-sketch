document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("select");
  btn.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

const createBoard = (size) => {
  let board = document.querySelector(".container");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let newDivs = size * size;
  for (i = 0; i < newDivs; i++) {
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend", div);
  }
};

let input = document.querySelector("input");

function getSize() {
  let input = prompt("Give me a size for the board");
  let message = document.getElementById("message");
  if (input == "") {
    message.innerHTML = "Please add a number";
  } else if (input < 1 || input > 100) {
    message.innerHTML = "Please use a number between 1-100";
  } else {
    message.innerHTML = "Great!";
    return input;
  }
}

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   let value = e.target.value;
//   if (value > 0 && value <= 100) {
//     console.log(value);
//     return value;
//   } else {
//     heading.textContent = "Try again!";
//   }
// }

// let select = document.getElementById("select");
// let heading = document.querySelector("h5");

// select.addEventListener("click", check);
