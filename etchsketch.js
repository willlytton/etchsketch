// 16 x 16 div grid
// O(n)2) quadratic equation SLOOOOOOW if scalled to large numbers

function createGrid() {
    let n = prompt("Define n size of grid?");
    for (let i = 0; i < n; i++) {
         for (let j = 0; j < n; j++) {
            const gridContainer = document.querySelector(".grid-container");
            const div = document.createElement('div');
            gridContainer.append(div);
            div.textContent = "Mr";


        }
    }
}

console.log(createGrid());




    // function createGrid() { 
    //     const grid = [row * col];

    // }



// O(n(2)) grid create may consider using linear algo to create grid if possible

            // const cell = document.createElement('div');
            // container.appendChild('div');
            
