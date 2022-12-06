const DEFAULT_COLOR = '#333';
const DEFAULT_SIZE = 32;


let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE

const gridContainer = document.querySelector('.grid-container');
const resetButton = document.getElementById('reset');
const colorButton = document.getElementById('color');


resetButton.addEventListener('click', reset);
colorButton.addEventListener('click', setColor);

// 16 x 16 div grid
// O(n)2) quadratic equation SLOOOOOOW if scaled to large numbers

function createGrid(n) {
    for (let i = 0; i < n * n; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('square');
        gridElement.addEventListener('mouseover', setColor);
        gridContainer.appendChild(gridElement);
        gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    }
}

// had no choice but to use HTML, lol!
function reset() {
    gridContainer.innerHTML = '';
    createGrid();
}

// moves color functionality to seperate function so new colors can be add...and for cleaner code
function setColor(e) {
    if (e.type === 'mouseover') {
        e.target.style.backgroundColor = 'black';
    } else if (e.type === 'click') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }

}

function defaultState() {
    createGrid(currentSize);
}
 
