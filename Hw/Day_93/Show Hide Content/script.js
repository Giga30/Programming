const p = document.getElementById('paragraph');
const btn = document.getElementById('btn');
let state = true;

btn.addEventListener('click', function(){
    if(state == true){
        btn.innerHTML = 'Appear'
        p.style.display = 'none'
        state = false
    }else{
        btn.innerHTML = 'Disappear'
        p.style.display = 'block'
        state = true
    }
})