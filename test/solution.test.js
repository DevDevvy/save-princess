const { processData, displayPathtoPrincess } = require('../index');

//Regular corners testing
describe('displayPathtoPrincess - valid corners', () => {
    test('top-left corner', () => {
        const grid = ['p--', '-m-', '---'];
        expect(displayPathtoPrincess(3, grid)).toBe('UP\nLEFT\n');
    });

    test('top-right corner', () => {
        const grid = ['--p', '-m-', '---'];
        expect(displayPathtoPrincess(3, grid)).toBe('UP\nRIGHT\n');
    });

    test('bottom-left corner', () => {
        const grid = ['---', '-m-', 'p--'];
        expect(displayPathtoPrincess(3, grid)).toBe('DOWN\nLEFT\n');
    });

    test('bottom-right corner', () => {
        const grid = ['---', '-m-', '--p'];
        expect(displayPathtoPrincess(3, grid)).toBe('DOWN\nRIGHT\n');
    });

    test('larger 5x5 bottom-left', () => {
        const grid = [
            '-----',
            '-----',
            '--m--',
            '-----',
            'p----'
        ];
        expect(displayPathtoPrincess(5, grid)).toBe('DOWN\nDOWN\nLEFT\nLEFT\n');
    });
});

//Edge cases
describe('displayPathtoPrincess - invalid input', () => {
    test('no princess (p) in grid returns null', () => {
        const grid = ['---', '-m-', '---'];
        expect(displayPathtoPrincess(3, grid)).toBeNull();
    });

    test('empty grid returns null', () => {
        expect(displayPathtoPrincess(3, [])).toBeNull();
    });

    test('undefined grid returns null', () => {
        expect(displayPathtoPrincess(3, undefined)).toBeNull();
    });

});

//Input parsing and edge cases
describe('processData - raw input parsing', () => {
    test('valid input returns correct moves', () => {
        const input = `3
---
-m-
p--`;
        expect(processData(input)).toBe('DOWN\nLEFT\n');
    });

    test('top-right corner from input', () => {
        const input = `3
--p
-m-
---`;
        expect(processData(input)).toBe('UP\nRIGHT\n');
    });

    test('no input returns null', () => {
        expect(processData()).toBeNull();
    });

    test('bad input string returns null', () => {
        const input = `3
-m-`;
        expect(processData(input)).toBeNull();
    });

    test('grid is not long enough', () => {
        const input = `3
---
-m-`;
        expect(processData(input)).toBeNull();
    });

    test('non-numeric dimension returns null', () => {
        const input = `abc
    p--
    -m-
    ---`;
        expect(processData(input)).toBeNull();
    });

    test('zero dimension returns null', () => {
        const input = `0`;
        expect(processData(input)).toBeNull();
    });

    test('negative dimension returns null', () => {
        const input = `-3
    p--
    -m-
    ---`;
        expect(processData(input)).toBeNull();
    });

    test('multiple princesses in corners returns correct path to first one', () => {
        const input = `3
    p-- 
    -m-
    --p`;
        expect(processData(input)).toBe('UP\nLEFT\n');
    });

});
