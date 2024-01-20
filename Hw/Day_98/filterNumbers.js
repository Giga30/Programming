let arr = [234, 235134, 1, -2345, 11459, 8137482384098, 912849, -1249184091384092384]

function sortNumbers(arr){
    return arr.filter((e) =>{
        return e % 2 == 0
    })
}

console.log(sortNumbers(arr))