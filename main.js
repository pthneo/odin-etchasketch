var gridSize = 16;
var gridSquares;
const contentArea = document.getElementById("content");
const resetButton = document.getElementById("reset");
const submitButton = document.getElementById("submit");
const chosenGridSize = document.getElementById("grid-size");
const maxDimension = 640;

function drawGrid() {
    for (let i = 0; i < gridSize; i++) {
        var gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        contentArea.appendChild(gridRow);
        for (let j = 0; j < gridSize; j++) {
            var gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
    }

    let gridDimension = maxDimension / gridSize;
    gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach((gridSquare) => {
        gridSquare.style.width = `${gridDimension}px`;
        gridSquare.style.height = `${gridDimension}px`;
        gridSquare.style.boxSizing = "border-box";
    });

    gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = "black";
        });
    });
}

drawGrid();

resetButton.addEventListener("click", () => {
    gridSquares.forEach((gridSquare) => {
        gridSquare.style.backgroundColor = "white";
    });
});

submitButton.addEventListener("click", () => {
    gridSize = parseInt(chosenGridSize.value);
    contentArea.innerHTML = "";
    drawGrid();
});