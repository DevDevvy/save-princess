# Save the Princess – HackerRank Bot Challenge (JavaScript)

This project contains a solution to the classic [HackerRank "Bot Saves Princess"](https://www.hackerrank.com/challenges/saveprincess) problem using JavaScript.

The project aim is to help the bot (`m`) find the shortest path to a princess (`p`) who is supposed to be in one of the four corners of the grid. The problem states the princess will be in one of the 4 corners, so the logic checks all 4 corners to find the princess without needing to iterate through the grid.

## Problem Summary

- You're given an odd-dimension square grid (e.g., 3x3, 5x5).
- The grid contains:
  - A bot located in the center (`m`)
  - A princess located in one of the corners (`p`)
- You must print the path the bot should take to reach the princess, one move per line (`UP`, `DOWN`, `LEFT`, `RIGHT`) in a single output using \n.

## How to Run the Project Locally

### 1. Download or Clone the Repo

```
git clone https://github.com/devdevvy/save-princess.git
cd save-princess
```

### 2. Install Dependencies

```
npm install
```

This will install Jest for running the tests.

### 3. Run the Tests

```
npm test
```

## How to Use in HackerRank

1. Open the "Bot Saves Princess" problem on HackerRank.

2. Set the language to JavaScript (Node.js) in the dropdown.

3. Copy the contents of src/solution.js and paste the displayPathtoPrincess() function into the editor.

   OR Copy the code below to paste into the editor:

   ```JavaScript
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
     //Check the corners
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
   ```

4. Make sure only the function body is pasted (remove the module.export line if it is present).

5. Run the test cases to verify correctness.
