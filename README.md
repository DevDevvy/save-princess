# Save the Princess – HackerRank Bot Challenge (JavaScript)

This project contains a solution to the classic [HackerRank "Bot Saves Princess"](https://www.hackerrank.com/challenges/saveprincess) problem using JavaScript.

The project aim is to help the bot (`m`) find the shortest path to a princess (`p`) who is supposed to be in one of the four corners of the grid.

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

4. Make sure only the function body is pasted (remove the module.export line if it is present).

5. Run the test cases to verify correctness.
