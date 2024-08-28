// get elements from dom
const grid = document.getElementById('grid');

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// create cells 
for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    grid.appendChild(cell);
}

