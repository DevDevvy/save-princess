//solution function to display the path to reach the princess
//TODO: copy this function's code into hackerrank to run the problem
function displayPathtoPrincess(dimension, grid) {
    //find the center of the grid
    const center = Math.floor(dimension / 2);

    // Check if the grid is valid
    if (!Array.isArray(grid) || grid.length === 0) return null;

    let princessRow = -1;
    let princessCol = -1;

    // Define the four corners
    const corners = [
        [0, 0],
        [0, dimension - 1],
        [dimension - 1, 0],
        [dimension - 1, dimension - 1]
    ];
    // Check if the princess is in any of the corners
    let foundPrincess = false;
    //Check the corners
    for (let [r, c] of corners) {
        if (grid[r][c] === 'p') {
            princessRow = r;
            princessCol = c;
            foundPrincess = true;
            break;
        }
    }
    // If the princess is not found in any corner, return null
    if (!foundPrincess) {
        return null;
    }

    const rowMoves = princessRow - center;
    const colMoves = princessCol - center;

    //define movesString to store the moves in a single string
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