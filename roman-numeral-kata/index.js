const refs = [
  { num: 1000, roman: 'M' },
  { num: 900, roman: 'CM' },
  { num: 500, roman: 'D' },
  { num: 400, roman: 'CD' },
  { num: 100, roman: 'C' },
  { num: 90, roman: 'XC' },
  { num: 50, roman: 'L' },
  { num: 40, roman: 'XL' },
  { num: 10, roman: 'X' },
  { num: 9, roman: 'IX' },
  { num: 5, roman: 'V' },
  { num: 4, roman: 'IV' },
  { num: 1, roman: 'I' },
]

export const toRomanNumber = (number) => {
  const initialAccumulator = { roman: '', number };
  return refs.reduce((accumulator, { num, roman }) => {
    if (accumulator.number === num) return { number: 0, roman: accumulator.roman + roman };
    if (accumulator.number > num) {
      const occurences = parseInt(accumulator.number / num);
      return {
        roman: accumulator.roman + roman.repeat(occurences),
        number: accumulator.number - (num * occurences),
      }
    }
    return accumulator;
  }, initialAccumulator).roman;
};

export const toDigitNumber = (romanNumber) => {
  let digit = 0;
  while(romanNumber.length > 0) {
    const { nextRomanNumber, num } = computeDigit(romanNumber);
    romanNumber = nextRomanNumber;
    digit += num;
  }
  return digit;
}

const computeDigit = (romanNumber) => {
  let nextRomanNumber = romanNumber;
  for ({ num, roman } of refs) {
    if (nextRomanNumber.startsWith(roman)) {
      return {
        nextRomanNumber: nextRomanNumber.substring(roman.length),
        num,
      }
    }
  }
}
