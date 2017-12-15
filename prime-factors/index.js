const getPrimeFactors = (n) => {
  const res = [];
  if (n > 1) {
    while (n % 2 === 0) {
      res.push(2);
      n /= 2;
    }
    while (n % 3 === 0) {
      res.push(3);
      n /= 3;
    }
  }
  if (n > 1) res.push(n);
  return res;
}

module.exports = {
  getPrimeFactors
};
