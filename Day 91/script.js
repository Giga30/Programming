var pos = 0; 
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 10);
let i;

function move() {
    if(pos >= 150) {
        clearInterval(t);
        moveBack()
        i = setInterval(moveBack, 10);
    }
    else {
        pos += 1;
        box.style.left = pos+"px";
    }
}

function moveBack(){
    if(pos >= 0){
        pos -= 1;
        box.style.left = pos+"px";
    }else{
        clearInterval(i)
        t = setInterval(move, 10)
    }
}