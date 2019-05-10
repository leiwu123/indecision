
const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

// const getFirstName = fullName => fullName.split(' ')[0];


console.log(getFirstName('Grant Tyson'));

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }  
};

console.log(multiplier.multiply());
