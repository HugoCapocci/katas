export const parse = (lines) => {
  let flatNumber = '';
  for (let i of [0, 1, 2]) {
    for (let j of [0, 1, 2]) {
      flatNumber += lines[i][j];
    }
  }
  return toNumber(flatNumber);
}

const toNumber = (flatNumber) => {
  switch(flatNumber) {
    case '     |  |':
      return '1';
  }
}
