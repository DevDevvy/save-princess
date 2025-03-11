const { processData, displayPathtoPrincess } = require('../index');

describe('displayPathtoPrincess - valid corners', () => {
    test('top-left corner', () => {
        const grid = ['p--', '-m-', '---'];
        expect(displayPathtoPrincess(3, grid)).toEqual(['UP', 'LEFT']);
    });

    test('top-right corner', () => {
        const grid = ['--p', '-m-', '---'];
        expect(displayPathtoPrincess(3, grid)).toEqual(['UP', 'RIGHT']);
    });

    test('bottom-left corner', () => {
        const grid = ['---', '-m-', 'p--'];
        expect(displayPathtoPrincess(3, grid)).toEqual(['DOWN', 'LEFT']);
    });

    test('bottom-right corner', () => {
        const grid = ['---', '-m-', '--p'];
        expect(displayPathtoPrincess(3, grid)).toEqual(['DOWN', 'RIGHT']);
    });

    test('larger 5x5 bottom-left', () => {
        const grid = [
            '-----',
            '-----',
            '--m--',
            '-----',
            'p----'
        ];
        expect(displayPathtoPrincess(5, grid)).toEqual(['DOWN', 'DOWN', 'LEFT', 'LEFT']);
    });
});

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

describe('processData - raw input parsing', () => {
    test('valid input returns correct moves', () => {
        const input = `3
---
-m-
p--`;
        expect(processData(input)).toEqual(['DOWN', 'LEFT']);
    });

    test('top-right corner from input', () => {
        const input = `3
--p
-m-
---`;
        expect(processData(input)).toEqual(['UP', 'RIGHT']);
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
});
