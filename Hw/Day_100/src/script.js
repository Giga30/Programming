const incrementBtn = document.getElementById('inc')
const decrementBtn = document.getElementById('dec')
const counter = document.getElementById('count')

let count = 0

updateColor()

incrementBtn.addEventListener('click', function (){
    counter.innerHTML = ++count
    updateColor()
})

decrementBtn.addEventListener('click', function (){
    counter.innerHTML = --count;
    updateColor()
})

function updateColor(){
    if(count === 0){
        counter.classList.add('text-yellow-500')
    }else{
        counter.classList.remove('text-yellow-500')
    }

    if(count > 0){
        counter.classList.add('text-green-500')
    }else{
        counter.classList.remove('text-green-500')
    }

    if(count < 0){
        counter.classList.add('text-red-500')
    }else{
        counter.classList.remove('text-red-500')
    }
}