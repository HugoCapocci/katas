import { getPrimeFactors } from './index';

describe.only('prime-factors', () => {
  it('Should return no prime factors for 1', () => {
    expect(getPrimeFactors(1)).toEqual([]);
  });

  it('Should return one prime factor for 2', () => {
    expect(getPrimeFactors(2)).toEqual([2]);
  });

});
