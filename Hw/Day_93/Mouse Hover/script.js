const div = document.getElementById("div");

div.addEventListener('mouseenter', function(){
    div.style.backgroundColor = "Red";
})

div.addEventListener('mouseleave', function(){
    div.style.backgroundColor = "Black";
})