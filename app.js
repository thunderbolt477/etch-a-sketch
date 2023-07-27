document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
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
