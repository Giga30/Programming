const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let canvasBgColor = 'blue';
let locationX = 0;
let locationY = 0;
let dx = 5;
let dy = 5;


canvas.width = windowWidth;
canvas.height = windowHeight;

canvas.style.backgroundColor = canvasBgColor;

function drawRect(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(locationX, locationY, 100, 100);
}

drawRect();

document.addEventListener('keydown', function(event){
    switch(event.key){
        case "w":
            locationY -= dy;
            break
        case "s":
            locationY += dy;
            break
        case "a":
            locationX -= dx;
            break
        case "d":
            locationX += dx;
            break
        default:
            break
    }
    drawRect();
})
