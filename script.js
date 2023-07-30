let board = document.querySelector(".container");
let input = document.querySelector("input");
let message = document.getElementById("message");
let btn = document.getElementById("select");
let color = "black";
let clicked = false;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      clicked = !clicked;
      let draw = document.getElementById("draw");
      if (clicked) {
        draw.innerHTML = "Etch-a-Sketch is on!";
      } else {
        draw.innerHTML = "Etch-a-Sketch is off!";
      }
    }
  });
  btn.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let container = size * size;

  for (i = 0; i < container; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", highlight);
    board.insertAdjacentElement("beforeend", divs);
  }
}

function getSize() {
  let input = prompt("Enter a new size for the board");
  if (input == "") {
    message.innerHTML = "Please insert a number";
  } else if (input < 1 || input > 100) {
    message.innerHTML = "Please insert a number between 1 and 100";
  } else {
    message.innerHTML = "Great!";
    return input;
  }
}

// coloring of divs below
function highlight() {
  if (clicked) {
    if (color == "random") {
      const randomBetween = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      const rgb = `rgb(${r},${g},${b})`;

      this.style.backgroundColor = rgb;
    } else {
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
