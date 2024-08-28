// get elements from dom
const grid = document.getElementById('grid');
const play = document.getElementById('play-btn');

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// create cells 
play.addEventListener('click', function(e){
    e.preventDefault();

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
    
        grid.appendChild(cell);
    }
    
})

