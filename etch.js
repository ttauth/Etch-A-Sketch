// var div = document.createElement("div");
// div.style.width = "106px";
// div.style.height = "106px";
// div.style.background = "gray";
// div.style.color = "black";

const grid = document.getElementById("grid");

function makeGrid(rows,cols){
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols',cols);
    for (var c= 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
      
        grid.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16);