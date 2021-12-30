let trigger =  document.getElementById("name");

function mouseOver() {
    trigger.style.backgroundColor = "#a9c3d1";
}

trigger.addEventListener("mouseover", mouseOver); 

function mouseOut() {
    trigger.style.backgroundColor = "white";
}

trigger.addEventListener("mouseout", mouseOut);
    
mouseOver();
mouseOut();