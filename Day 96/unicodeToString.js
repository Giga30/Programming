let text = [72, 69, 76, 76, 79];

console.log(unicodeToString(text));

function unicodeToString(arr){
    return String.fromCharCode(...text);
}