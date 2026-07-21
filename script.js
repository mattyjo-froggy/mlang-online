const grid = document.querySelector(".grid");

const leftColumn = document.createElement("div");
leftColumn.classList.add("column");

const rightColumn = document.createElement("div");
rightColumn.classList.add("column");

grid.appendChild(leftColumn);
grid.appendChild(rightColumn);