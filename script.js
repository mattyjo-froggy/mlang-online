const grid = document.querySelector(".grid");

const cards = [...document.querySelectorAll(".card")];

const leftColumn = document.createElement("div");
leftColumn.classList.add("column");

const rightColumn = document.createElement("div");
rightColumn.classList.add("column");

grid.innerHTML = "";

grid.appendChild(leftColumn);
grid.appendChild(rightColumn);

cards.forEach((card, index) => {

    console.log(index, card.querySelector(".p-title")?.textContent);

    if (index % 2 === 0) {
        leftColumn.appendChild(card);
    } else {
        rightColumn.appendChild(card);
    }
});

leftColumn.appendChild(cards[0]);