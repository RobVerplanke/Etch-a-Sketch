const holder = document.getElementById("holder");
const buttonHolder = document.getElementById("button-holder");
const container = document.getElementById("container");
const defaultSize = 16;
let userSize = defaultSize;
let colorMode = 'black';

// Add styles
holder.classList.add('holder');
buttonHolder.classList.add('button-holder');
container.classList.add('container');

// Create a grid
function createGrid(gridSize) {
    container.style.setProperty('--grid-size', gridSize);
    
    // Create a given number of squares
    for (a = 0; a < (gridSize * gridSize); a++){
        let square = document.createElement('div');
        
        // Add a 'mouse over' listener to each square to let it change its color
        square.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = colorMode;
            e.target.style.border = colorMode;
            this.classList.add('square-over');            
        });
        
        // Add the squares to the grid container and give them a style
        container.appendChild(square).className = "square";
    }
}

// BUTTONS

// Create a button that will allow users to give up a number of squares
buttonSize = document.createElement('button');
buttonSize.innerText ='Afmeting';

buttonSize.addEventListener('click', () => { 
    userSize = prompt("Afmeting grid:", "Max. 100");
    
    // Create a grid but only if the given number is smaller than 100, else give a warning
    if (userSize < 100) {
        // empty current grid
        container.innerHTML = "";
        createGrid(userSize);
    } else {
        alert("Een getal onder de 100!");
    }    
});

// Reset button
buttonReset = document.createElement('button');
buttonReset.innerText = "Reset";

buttonReset.addEventListener('click', () =>{
    // Clear current grid
    container.innerHTML = "";
    // Create a new grid with the size from the input prompt, if user did not resize the grid, use the default size.
    if (userSize){
        createGrid(userSize);
    } else {
        createGrid(defaultSize);
    }
})

// Create a button that will change pencil color to red
buttonRed = document.createElement('button');
buttonRed.innerText ='Rood';

buttonRed.addEventListener('click', () =>{
    colorMode = 'red';

})

// Create a button that will change pencil color to blue
buttonBlue = document.createElement('button');
buttonBlue.innerText ='Blauw';

buttonBlue.addEventListener('click', () =>{
    colorMode = 'Blue';

})

// Create a button that will change pencil color to black
buttonBlack = document.createElement('button');
buttonBlack.innerText ='Zwart';

buttonBlack.addEventListener('click', () =>{
    colorMode = 'Black';

})


buttonHolder.appendChild(buttonBlack);
buttonHolder.appendChild(buttonBlue);
buttonHolder.appendChild(buttonRed);
buttonHolder.appendChild(buttonSize);
buttonHolder.appendChild(buttonReset);

// Create default grid
createGrid(defaultSize);