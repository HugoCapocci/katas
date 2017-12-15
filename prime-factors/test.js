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

  it('Should return two prime factors for 4', () => {
    expect(getPrimeFactors(4)).toEqual([2, 2]);
  });

  it('Should return one prime factor for 5', () => {
    expect(getPrimeFactors(5)).toEqual([5]);
  });

  it('Should return two prime factors for 6', () => {
    expect(getPrimeFactors(6)).toEqual([2, 3]);
  });

  it('Should return 3 prime factors for 8', () => {
    expect(getPrimeFactors(8)).toEqual([2, 2, 2]);
  });

});
