const { displayPathtoPrincess } = require('./src/solution');

function processData(input) {
    if (!input) return null;

    const lines = input.trim().split('\n');
    const dimension = parseInt(lines[0]);

    // Validate dimension and grid length
    if (isNaN(dimension) || lines.length < dimension + 1) return null;

    const grid = [];

    for (let i = 1; i <= dimension; ++i) {
        grid.push(lines[i].trim());
    }

    return displayPathtoPrincess(dimension, grid);
}

module.exports = { processData, displayPathtoPrincess };