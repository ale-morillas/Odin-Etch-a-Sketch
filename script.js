// Board
let board = document.querySelector(".container-board");
const gridSize = 16;

// Drawing board
function drawBoard(gridSize = 16) {
  // Board properties
  const boardSide = parseInt(
    window.getComputedStyle(board).getPropertyValue("width")
  );
  const defaultDimensions = boardSide / gridSize;
  // Grid
  // Create Row and Column divs
  for (let i = 0; i < gridSize; i++) {
    // Create the rows
    const columnDiv = document.createElement("div");
    columnDiv.className = "columnDiv";
    board.appendChild(columnDiv);

    for (let j = 0; j < gridSize; j++) {
      // Create the columns
      const columnItem = document.createElement("div");
      columnItem.className = "columnItem";
      columnDiv.appendChild(columnItem);

      //Columns dimensions
      columnItem.style.height = defaultDimensions + "px";
      columnItem.style.width = defaultDimensions + "px";
      // Columns styles
      columnItem.style.backgroundColor = "white";
      columnItem.style.border = "solid 1px #2e1760";
    }
    columnDiv.style.height = defaultDimensions + "px";
  }
}

drawBoard();

//Remove the board
function removeBoard() {
  const columnDivs = document.querySelectorAll(".columnDiv");

  columnDivs.forEach((columnDiv) => {
    while (columnDiv.firstChild) {
      columnDiv.removeChild(columnDiv.firstChild);
    }
    columnDiv.parentNode.removeChild(columnDiv);
  });
}

// Change Board Size
function changeSize() {
  let input;

  do {
    input = parseInt(prompt("Enter a size between 2 and 100"));
  } while (input < 2 || input > 100);

  removeBoard();
  drawBoard(input);
}

let changeSizeBtn = document.querySelector("#changeSize");
changeSizeBtn.addEventListener("click", changeSize);

// Black Pencil Button
function colorBlack() {
  const columnItems = document.querySelectorAll(".columnItem");

  columnItems.forEach((columnItem) => {
    columnItem.addEventListener("mouseenter", () => {
      columnItem.style.backgroundColor = "black";
    });
  });
}

let pencilBlack = document.querySelector("#blackPen");
pencilBlack.addEventListener("click", colorBlack);

//Reset Draw
function resetDraw() {
  const columnItems = document.querySelectorAll(".columnItem");

  columnItems.forEach((columnItem) => {
    columnItem.style.backgroundColor = "white";
  });
}

let resetDrawBtn = document.querySelector("#resetDraw");
resetDrawBtn.addEventListener("click", resetDraw);

// Erase Draw
function eraseDraw() {
  const columnItems = document.querySelectorAll(".columnItem");

  columnItems.forEach((columnItem) => {
    columnItem.addEventListener("mouseenter", () => {
      columnItem.style.backgroundColor = "white";
    });
  });
}

let eraseBtn = document.querySelector("#erase");
eraseBtn.addEventListener("click", eraseDraw);
