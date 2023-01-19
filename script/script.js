const holder = document.getElementById("holder");
const buttonHolder = document.getElementById("button-holder");
const container = document.getElementById("container");

// Add styles
holder.classList.add('holder');
buttonHolder.classList.add('button-holder');
container.classList.add('container');

// Create a button that will allow users to give up a number of squares
let button = document.createElement('button');
buttonHolder.appendChild(button);

// Create the grid
function createGrid(gridSize) {
    container.style.setProperty('--grid-size', gridSize);
    
    // Create a given number of squares
    for (a = 0; a < (gridSize * gridSize); a++){
        let square = document.createElement('div');
        
        // Add a 'mouse over' listener to each square
        square.addEventListener("mouseover", function(e){
            this.classList.add('square-over');
        });
        
        // Add the squares to the grid container and give them a style
        container.appendChild(square).className = "square";
    }
}

createGrid(30);