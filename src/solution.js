//solution function to display the path to reach the princess
//TODO: copy this function's code into hackerrank to run the problem
function displayPathtoPrincess(dimension, grid) {
    const center = Math.floor(dimension / 2);

    if (!Array.isArray(grid) || grid.length === 0) return null;

    let princessRow = -1;
    let princessCol = -1;

    // Check the four corners
    const corners = [
        [0, 0],
        [0, dimension - 1],
        [dimension - 1, 0],
        [dimension - 1, dimension - 1]
    ];

    for (let [r, c] of corners) {
        if (grid[r][c] === 'p') {
            princessRow = r;
            princessCol = c;
            break;
        }
    }

    const rowMoves = princessRow - center;
    const colMoves = princessCol - center;
    let movesString = ''

    // Print vertical moves
    const vertical = rowMoves < 0 ? 'UP\n' : 'DOWN\n';
    for (let i = 0; i < Math.abs(rowMoves); i++) {
        movesString += vertical
    }

    // Print horizontal moves
    const horizontal = colMoves < 0 ? 'LEFT\n' : 'RIGHT\n';
    for (let i = 0; i < Math.abs(colMoves); i++) {
        movesString += horizontal
    }
    //log for hackerrank test
    console.log(movesString)
    //return for local testing
    return movesString
}

module.exports = { displayPathtoPrincess };