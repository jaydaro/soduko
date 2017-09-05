// a couple puzzle arrays to test with
const invalidData = [
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
];

const validData = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

function sudokuValidator(dataSet) {

  //create a valid set to compare to
  const validSet = '1,2,3,4,5,6,7,8,9';

  //get the columns
  const cols = dataSet.map((row, index) => dataSet.map(row => row[index]));

  //get the groups.
  const groups = dataSet.map(row => []);
  dataSet.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      let groupId = Math.floor(columnIndex / 3) * 3 + Math.floor(rowIndex / 3);
      groups[groupId].push(value);
    })
  });

  //check if valid
  const isValid = dataArray => dataArray.every(row => row.sort().toString() === validSet);

  //return whether it is valid or not
  return isValid(dataSet) && isValid(cols) && isValid(groups);
}

console.log('validData',sudokuValidator(validData));