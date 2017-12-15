const getPrimeFactors = (n) => {
  const res = [];
  let factor = 2;
  while (n > 1) {
    while (n % factor === 0) {
      res.push(factor);
      n /= factor;
    }
    factor++;
  }
  return res;
}

module.exports = {
  getPrimeFactors
};
