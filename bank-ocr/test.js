//    _  _     _  _  _  _  _
//  | _| _||_||_ |_   ||_||_|
//  ||_  _|  | _||_|  ||_| _|
import * as bankOcr from './index';

describe.only('bankOcr', () => {
  it('Should parse character "one"', () => {
    const one = [
      '   ',
      '  |',
      '  |',
    ];
    expect(bankOcr.parse(one)).toEqual('1');
  });

  it('Should parse character "two"', () => {
    const two = [
      ' _ ',
      ' _|',
      '|_ ',
    ];
    expect(bankOcr.parse(two)).toEqual('2');
  });

  it('Should parse characters "onetwo"', () => {
    const oneTwo = [
      '    _ ',
      '  | _|',
      '  ||_ ',
    ];
    expect(bankOcr.parse(oneTwo)).toEqual('12');
  });
});
