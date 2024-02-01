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
    const rowDiv = document.createElement("div");
    rowDiv.className = "rowDiv";
    board.appendChild(rowDiv);

    for (let j = 0; j < gridSize; j++) {
      // Create the columns
      const columnItem = document.createElement("div");
      columnItem.className = "columnItem";
      rowDiv.appendChild(columnItem);

      //Columns dimensions
      columnItem.style.height = defaultDimensions + "px";
      columnItem.style.width = defaultDimensions + "px";
      // Columns styles
      columnItem.style.backgroundColor = "white";
      columnItem.style.border = "solid 1px #2e1760";
    }
    rowDiv.style.height = defaultDimensions + "px";
  }
}

drawBoard();
