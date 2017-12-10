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
  return computeRoman(number, refs, 0);
};

const computeRoman = (number, refs, index) => {
  const { num, roman } = refs[index];
  if (number === num) return roman;
  if (number > num) {
    const occurences = parseInt(number / num);
    const nextNumber = number - (num * occurences);
    return roman.repeat(occurences) + (num > 1 ? computeRoman(nextNumber, refs, index + 1) : '');
  }
  return computeRoman(number, refs, index + 1);
}

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
