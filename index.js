const { displayPathtoPrincess } = require('./src/solution');

function processData(input) {
    const lines = input.trim().split('\n');
    const dimension = parseInt(lines[0]);
    const grid = [];

    for (let i = 1; i <= dimension; ++i) {
        grid.push(lines[i].trim());
    }

    return displayPathtoPrincess(dimension, grid);
}

module.exports = { processData, displayPathtoPrincess };