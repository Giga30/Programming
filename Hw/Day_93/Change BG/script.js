const div = document.getElementById('div');
const button = document.getElementById('btn');
let isBlack = true;

btn.addEventListener('click', function(){
    if(isBlack == true){
        div.style.backgroundColor = 'red';
        isBlack = false;
    }else{
        div.style.backgroundColor = 'black';
        isBlack = true;
    }
})