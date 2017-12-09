import toRomanNumber from './index';

describe('numberToRomanNumeral', () => {
  it('should convert 1 to I', () => {
    expect(toRomanNumber(1)).toEqual('I');
  });

  it('should convert 2 to II', () => {
    expect(toRomanNumber(2)).toEqual('II');
  });

  it('should convert 4 to IV', () => {
    expect(toRomanNumber(4)).toEqual('IV');
  });

  it('should convert 5 to V', () => {
    expect(toRomanNumber(5)).toEqual('V');
  });

  it('should convert 7 to VII', () => {
    expect(toRomanNumber(7)).toEqual('VII');
  });

  it('should convert 43 to XLIII', () => {
    expect(toRomanNumber(43)).toEqual('XLIII');
  });

  it('should convert 369 to CCCLXIX', () => {
    expect(toRomanNumber(369)).toEqual('CCCLXIX');
  });

  it('should convert 2999 to MMCMXCIX', () => {
    expect(toRomanNumber(2999)).toEqual('MMCMXCIX');
  });
});
