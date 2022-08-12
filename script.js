function createGrid(numberOfSquares) {
    let divContainer = document.querySelector('.container');
    for (let i = 0; i < numberOfSquares ** 2; ++i) {
        let div = document.createElement('div');
        div.className = 'square';
        let newHeight = Math.floor(512 / numberOfSquares);
        div.style.height = `${newHeight}px`;
        div.style.width = `${newHeight}px`;
        divContainer.appendChild(div);
    }
}


function sketch() {
    let numberOfSquares = 16;
    createGrid(numberOfSquares);
    let sizeButton = document.querySelector('.size-button');
    sizeButton.addEventListener('click', resizeGrid);
}

function removeGrid() {
    let divContainer = document.querySelector('.container');
    let squares = document.querySelectorAll('.square');
    for (const square of squares) {
        divContainer.removeChild(square);
    }
}

function resizeGrid() {
    numberOfSquares = prompt("Enter the number of squares: ", "");
    removeGrid();
    createGrid(numberOfSquares);
}

sketch();