//solution function to display the path to reach the princess
//TODO: copy this function's code into hackerrank to run the problem
function displayPathtoPrincess(dimension, grid) {
    //find the center of the grid
    const center = Math.floor(dimension / 2);

    // Check if the grid is valid
    if (!Array.isArray(grid) || grid.length === 0) return null;

    //Initiates the princess row and column as -1 to check if the princess is found
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
    for (let [r, c] of corners) {
        if (grid[r][c] === 'p') {
            princessRow = r;
            princessCol = c;
            break;
        }
    }

    // If the princess is not found in any corner, return null
    if (princessRow === -1 || princessCol === -1) {
        return null;
    }

    const rowMoves = princessRow - center;
    const colMoves = princessCol - center;

    //define movesString to store the moves in a single string for output
    let movesString = ''

    // Concat vertical moves
    const vertical = rowMoves < 0 ? 'UP\n' : 'DOWN\n';
    for (let i = 0; i < Math.abs(rowMoves); i++) {
        movesString += vertical
    }

    // Concat horizontal moves
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