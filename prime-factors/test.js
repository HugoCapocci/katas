import { getPrimeFactors } from './index';

describe.only('prime-factors', () => {
  it('Should return no prime factors for 1', () => {
    expect(getPrimeFactors(1)).toEqual([]);
  });

});
