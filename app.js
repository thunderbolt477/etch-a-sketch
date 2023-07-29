let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      let draw = document.getElementById("draw");
      if (click) {
        draw.innerHTML = "Etch-A-Sketch is on!";
      } else {
        draw.innerHTML = "Etch-A-Sketch is off";
      }
    }
  });

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
    div.addEventListener("mouseover", colorDiv);
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

function colorDiv() {
  if (click) {
    if (color == "random") {
      const randomBetween = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      const rgb = `rgb(${r},${g},${b})`;
      console.log("random");
      this.style.backgroundColor = rgb;
    } else {
      console.log("black");
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(selectedColor) {
  color = selectedColor;
}

function reset() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
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
