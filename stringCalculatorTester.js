const { stringCalculator } = require('./stringCalculator.js');

function stringCalcTester(str) {
    if (stringCalculator('') === 0) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('2,3') === 5) console.log('Test passed!')
    else console.log('Test failed...');

    if (stringCalculator('1\n2,3') === 6) console.log('Test passed!')
    else console.log('Test failed...');

}

module.exports = { stringCalcTester }