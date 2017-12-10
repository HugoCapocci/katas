import { toRomanNumber, toDigitNumber } from './index';

describe('numberToRomanNumeral', () => {
  describe('toRomanNumber', () => {
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

  describe('toDigitNumber', () => {
    it('should convert I to 1', () => {
      expect(toDigitNumber('I')).toEqual(1);
    });

    it('should convert II to 2', () => {
      expect(toDigitNumber('II')).toEqual(2);
    });

    it('should convert III to 3', () => {
      expect(toDigitNumber('III')).toEqual(3);
    });

    it('should convert IV to 4', () => {
      expect(toDigitNumber('IV')).toEqual(4);
    });

    it('should convert V to 5', () => {
      expect(toDigitNumber('V')).toEqual(5);
    });

    it('should convert VII to 7', () => {
      expect(toDigitNumber('VII')).toEqual(7);
    });

    it('should convert XLIII to 43', () => {
      expect(toDigitNumber('XLIII')).toEqual(43);
    });

    it('should convert CCCLXIX to 369', () => {
      expect(toDigitNumber('CCCLXIX')).toEqual(369);
    });

    it('should convert MMCMXCIX to 2999', () => {
      expect(toDigitNumber('MMCMXCIX')).toEqual(2999);
    });
  })
});
