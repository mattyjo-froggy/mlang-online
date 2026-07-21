const grid = document.querySelector(".grid");

// Save the original cards
const cards = [...document.querySelectorAll(".card")];

// Remove everything from the grid
grid.innerHTML = "";

// Create columns
const leftColumn = document.createElement("div");
leftColumn.classList.add("column");

const rightColumn = document.createElement("div");
rightColumn.classList.add("column");

// Add columns to the grid
grid.appendChild(leftColumn);
grid.appendChild(rightColumn);

// Put cards into the columns
cards.forEach((card, index) => {

    console.log(index, card.querySelector(".p-title")?.textContent);

    if (index % 2 === 0) {
        leftColumn.appendChild(card);
    } else {
        rightColumn.appendChild(card);
    }
});