const gridContainer = document.querySelector('.grid-container');



// 16 x 16 div grid
// O(n)2) quadratic equation SLOOOOOOW if scaled to large numbers

function createGrid(size) {
    let n = prompt(`Define ${size} n of grid?`);
    for (let i = 0; i < n * n; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('square');
        gridElement.addEventListener('mouseover', function(e) {
            gridElement.style.backgroundColor = 'black'
            console.log(e);
        });
        gridContainer.appendChild(gridElement);
        gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    }
}
console.log(createGrid());

// function changeCol() {
//     gridElement.style.backgroundColor = 'black';
// }

