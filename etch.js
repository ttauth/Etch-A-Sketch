// var div = document.createElement("div");
// div.style.width = "106px";
// div.style.height = "106px";
// div.style.background = "gray";
// div.style.color = "black";

const grid = document.getElementById("grid");

//eraser settings
let eraseOn = false; 
const erase = document.getElementById("eraser");

//Color change function
let colorpicker = document.getElementById('colorpicker');

const reset = document.getElementById("reset");


//eraser function
erase.addEventListener('click', () => {
    eraseOn = true;
   
});

colorpicker.addEventListener('click', () => {
    eraseOn = false;
})

reset.addEventListener('click', () =>{

         // Change grid background color to black
    grid.style.backgroundColor = 'black';

    // Clear the colors of all grid cells
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });

})
function makeGrid(rows,cols){
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols',cols);
    for (var c= 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
      
        grid.appendChild(cell).className = "grid-item";
    };

};
let isDrawing = false; 
// Add event listeners for drawing and erasing
grid.addEventListener('mousedown', () => {
    isDrawing = true;
  });
  
  grid.addEventListener('mouseup', () => {
    isDrawing = false;
  });
  
  grid.addEventListener('mouseleave', () => {
    isDrawing = false;
  });
  
  grid.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;
    
    const cell = event.target;
 
  

    if (eraseOn){ //BUG FIX THIS
        cell.style.backgroundColor = 'black';
    }else {
        //Picking color
        let color = colorpicker.value;
        cell.style.backgroundColor = color;
    }
  });
//   In this code, we're using the mousedown, mouseup, mouseleave, and mousemove events to determine whether the mouse button is held down. When the mouse is moved while the button is held down (mousemove event), the cells' background color is updated to create the trail effect.
  
//   Adjust Trail Intensity:
//   You can experiment with the opacity, color, or other styling properties to adjust the trail's appearance according to your design preferences.
//   Remember that this is a basic example, and you can customize it further based on your project's requirements. You can also consider using more advanced techniques like canvas drawing for smoother trails, but this basic example should help you get started.
  
  
  
  
  
  
makeGrid(16, 16);