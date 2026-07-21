const grid = document.querySelector(".grid");
const cards = [...document.querySelectorAll(".card")];

function createColumns(numberOfColumns) {

    grid.innerHTML = "";

    const columns = [];

    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        columns.push(column);
        grid.appendChild(column);
    }

    cards.forEach((card, index) => {
        const columnIndex = index % numberOfColumns;
        columns[columnIndex].appendChild(card);
    });
}

createColumns(2);

function updateLayout() {

    if (window.innerWidth <= 700) {
        createColumns(1);
    } else {
        createColumns(2);
    }

    }

updateLayout();

window.addEventListener("resize", updateLayout);