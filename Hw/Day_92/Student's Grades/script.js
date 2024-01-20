const Student = {
    name: "Chad",
    lastName: "Orientadze",
    grades: [8, 7, 9, 10, 10, 8],
    avrgGrade: function(){
        let result = 0;
        for(let i = 0; i<this.grades.length; i++){
            result += this.grades[i]
        }
        return result / this.grades.length
    }
};

console.log(Student.avrgGrade())