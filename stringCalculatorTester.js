const { stringCalculator } = require('./stringCalculator.js');

function stringCalcTester(str) {
    if (stringCalculator('') === 0) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('2,3') === 5) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('1\n2,3') === 6) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('//;\n1;2') === 3) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('-2,3,-5') === 'negative numbers not allowed -2,-5') console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('2,1002') === 2) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('//[***]\n1***2***4') === 7) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('//[*][%]\n1*2%3') === 6) console.log('Test passed!')
    else console.log('Test failed...');
}

module.exports = { stringCalcTester }