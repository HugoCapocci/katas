const refs = [
  { num: 5, roman: 'V'},
  { num: 4, roman: 'IV'},
  { num: 1, roman: 'I'},
]

const toRomanNumber = (number) => {
  for (let {num, roman} of refs) {
    if (number === num) return roman;
    if (number > num) return roman.repeat(number);
  }
};

export default toRomanNumber;
