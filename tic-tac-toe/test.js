import { getGrid } from './index';

describe.only('ticTacToc', () => {
    it('Should has nine fields in a 3x3 grid', () => {
        expect(getGrid().length).toEqual(3);
        expect(getGrid()[0].length).toEqual(3);
        expect(getGrid()[1].length).toEqual(3);
        expect(getGrid()[2].length).toEqual(3);
        });
});
