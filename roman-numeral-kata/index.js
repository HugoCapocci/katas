const refs = [
  { num: 1000, roman: 'M'},
  { num: 900, roman: 'CM'},
  { num: 500, roman: 'D'},
  { num: 400, roman: 'CD'},
  { num: 100, roman: 'C'},
  { num: 90, roman: 'XC'},
  { num: 50, roman: 'L'},
  { num: 40, roman: 'XL'},
  { num: 10, roman: 'X'},
  { num: 9, roman: 'IX', exception: true},
  { num: 5, roman: 'V'},
  { num: 4, roman: 'IV', exception: true},
  { num: 1, roman: 'I'},
]

export const toRomanNumber = (number) => {
  return compute(number, refs, 0);
};

const compute = (number, refs, index) => {
  const { num, roman, exception } = refs[index];
  if (number === num) return roman;
  if (number > num && !exception) {
    const occurences = parseInt(number / num);
    const next = number - (num * occurences);
    if (next > 0 && num > 1) {
      return roman.repeat(occurences) + compute(next, refs, index + 1);
    } else return roman.repeat(number);
  }
  return compute(number, refs, index + 1);
}

export const toDigitNumber = (romanNumber) => {
  return 1;
}
