function createGrid() {
    let divContainer = document.querySelector('.container');
    for (let i = 0; i < 256; ++i) {
        let div = document.createElement('div');
        div.className = 'square';
        divContainer.appendChild(div);
    }
}

createGrid();