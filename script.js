// Board
const board = document.querySelector(".container-board");
let boardSide = parseInt(
  window.getComputedStyle(board).getPropertyValue("width")
);
const gridSize = 52;
const defaultDimensions = boardSide / gridSize;

// Grid
// Create Row and Column divs
for (let i = 0; i < gridSize; i++) {
  // Create the rows
  const rowDiv = document.createElement("div");
  rowDiv.className = "rowDiv";
  board.appendChild(rowDiv);
  //Create the margins

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
