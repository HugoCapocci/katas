import * as bankOcr from './index';

describe('bankOcr', () => {
  it('Should parse character "1"', () => {
    const one = [
      '   ',
      '  |',
      '  |',
    ];
    expect(bankOcr.parse(one)).toEqual('1');
  });

  it('Should parse character "2"', () => {
    const two = [
      ' _ ',
      ' _|',
      '|_ ',
    ];
    expect(bankOcr.parse(two)).toEqual('2');
  });

  it('Should parse characters "12"', () => {
    const oneTwo = [
      '    _ ',
      '  | _|',
      '  ||_ ',
    ];
    expect(bankOcr.parse(oneTwo)).toEqual('12');
  });

  it('Should parse characters "123456789"', () => {
    const accountNumber = [
      '    _  _     _  _  _  _  _ ',
      '  | _| _||_||_ |_   ||_||_|',
      '  ||_  _|  | _||_|  ||_| _|',
    ];
    expect(bankOcr.parse(accountNumber)).toEqual('123456789');
  });
});
