let person1 = {
    name: 'Giga',
    age: '13',
    walk: function(){
        console.log(`${this.name} has walked`)
    }
}

let person2 = {
    name: 'Jhon',
    age: '16',
    walk: function(){
        console.log(`${this.name} has walked`)
    }
}

// console.log(person1 == person2)
console.log(changeObj(person1))

function changeObj(obj){
    clone = obj
    for(let i in clone){
        if(i = 'name'){
            clone[i] = 'Bob'
        }else if(i = 'age'){
            clone[i] = 10
        }
    }
    return clone
}