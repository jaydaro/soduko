const {getColumns, getGroups}  = require('./get-arrays');
const {validData, invalidData} = require('./test-data');

function sudokuValidator(dataSet) {
  //create a valid set to compare to
  const validSet = '1,2,3,4,5,6,7,8,9';

  //check if valid
  const isValid = dataArray => dataArray.every(row => row.sort().toString() === validSet);

  //return whether it is valid or not
  return isValid(getColumns(dataSet)) && isValid(getGroups(dataSet)) && isValid(dataSet);
}

console.log('validData', sudokuValidator(validData));
console.log('validData', sudokuValidator(invalidData));