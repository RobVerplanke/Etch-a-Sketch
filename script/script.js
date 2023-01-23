const holder = document.getElementById("holder");
const buttonHolder = document.getElementById("button-holder");
const container = document.getElementById("container");

// Add styles
holder.classList.add('holder');
buttonHolder.classList.add('button-holder');
container.classList.add('container');

// Create a button that will allow users to give up a number of squares
button = document.createElement('button');
button.innerText ='Afmeting';

button.addEventListener('click', () => { 
    let userSize = prompt("Afmeting grid:", "Max. 100");
    
    // Only if the given number is smaller than 100 create a grid, else give a warning
    if (userSize < 100) {
        // empty current grid
        container.innerHTML = "";
        createGrid(userSize);
    } else {
        alert("Een getal onder de 100!");
    }    
});

buttonHolder.appendChild(button);

// Create the grid
function createGrid(gridSize) {
    container.style.setProperty('--grid-size', gridSize);
    
    // Create a given number of squares
    for (a = 0; a < (gridSize * gridSize); a++){
        let square = document.createElement('div');
        
        // Add a 'mouse over' listener to each square to let it change its color
        square.addEventListener("mouseover", function(e){
            this.classList.add('square-over');
        });
        
        // Add the squares to the grid container and give them a style
        container.appendChild(square).className = "square";
    }
}

// Create default grid
createGrid(15);