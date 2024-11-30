const { stringCalculator } = require('./stringCalculator.js');
const { stringCalcTester } = require('./stringCalculatorTester.js')

console.log(stringCalculator('2,3'))
console.log(stringCalculator('1\n2,3'))
console.log(stringCalculator('//;\n1;2'))
console.log(stringCalculator('-2,3,-5'))
console.log(stringCalculator('2,1002'));
console.log(stringCalculator('//[***]\n1***2***3'));
console.log(stringCalculator('//[**][%]\n1**2%3'));


stringCalcTester();
