export const parse = (lines) => {
  const length = lines[0].length / 3;
  const flatNumbers = [];
  let start = 0;
  while (start < length * 3) {
    let flatNumber = ''
    for (let i of [0, 1, 2]) {
      flatNumber += lines[i].slice(start, start + 3);
    }
    start += 3;
    flatNumbers.push(flatNumber);
  }
  return flatNumbers.map(toNumber).join('');
}

const toNumber = (flatNumber) => {
  switch(flatNumber) {
    case '     |  |':
      return '1';
    case ' _  _||_ ':
      return '2';
    default:
      return '';
  }
}
