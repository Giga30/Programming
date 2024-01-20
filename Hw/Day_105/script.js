class Natural {
    constructor(value) {
      this.value = value;
    }
}
  

class Integer {
    constructor(value) {
      this.value = value;
    }
}
  

class Rational {
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  

    toDecimal() {
      return this.numerator / this.denominator;
    }
}
  

class Irrational {
    constructor(value) {
      this.value = value;
    }
}
  

class Real {
    constructor(value) {
      this.value = value;
    }
}
  

class Imaginary {
    constructor(coefficient) {
      this.coefficient = coefficient;
    }
}
  

class Complex {
    constructor(real, imaginary) {
      this.real = real;
      this.imaginary = imaginary;
    }
  

    static add(complex1, complex2) {
      return new Complex(
        complex1.real + complex2.real,
        complex1.imaginary + complex2.imaginary
      );
    }
}


const naturalNumber = new Natural(5);
const integerNumber = new Integer(-3);
const rationalNumber = new Rational(1, 2);
const irrationalNumber = new Irrational(Math.sqrt(2));
const realNumber = new Real(3.14);
const imaginaryNumber = new Imaginary(2);
const complexNumber1 = new Complex(1, 2);
const complexNumber2 = new Complex(2, 3);
  

const resultComplex = Complex.add(complexNumber1, complexNumber2);
console.log("Result of adding complex numbers:", resultComplex);
  