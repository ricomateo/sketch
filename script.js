function createGrid(numberOfSquares) {
    let divContainer = document.querySelector('.container');
    for (let i = 0; i < numberOfSquares ** 2; ++i) {
        let div = document.createElement('div');
        div.className = 'square';
        let newHeight = Math.floor(512 / numberOfSquares);
        div.style.height = `${newHeight}px`;
        div.style.width = `${newHeight}px`;
        divContainer.appendChild(div);
        div.addEventListener('mouseenter', changeRandomColor);
    }
}


function sketch() {
    let numberOfSquares = 32;
    createGrid(numberOfSquares);
    addSizeButton();
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
    if (numberOfSquares == undefined) return;
    removeGrid();
    createGrid(numberOfSquares);
}

function addSizeButton() {
    let sizeButton = document.querySelector('.size-button');
    sizeButton.addEventListener('click', resizeGrid);
    addDrawingFeature();
}

function addDrawingFeature() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((div) => {
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'black';
        });
    });
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function changeRandomColor(e) {
    let redAmount = getRandomInt(0, 265);
    let greenAmount = getRandomInt(0, 265);
    let blueAmount = getRandomInt(0, 265);
    e.target.style.backgroundColor = `rgb(${redAmount}, ${blueAmount}, ${greenAmount})`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}  


sketch();
