import { getPrimeFactors } from './index';

describe.only('prime-factors', () => {
  it('Should return no prime factors for 1', () => {
    expect(getPrimeFactors(1)).toEqual([]);
  });

  it('Should return one prime factor for 2', () => {
    expect(getPrimeFactors(2)).toEqual([2]);
  });

  it('Should return one prime factor for 3', () => {
    expect(getPrimeFactors(3)).toEqual([3]);
  });

});
