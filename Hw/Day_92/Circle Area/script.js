const Circle = {
    radius: 12,
    calculateArea: function(){
        return this.radius*Math.PI*2;
    }
};

console.log(Circle.calculateArea())