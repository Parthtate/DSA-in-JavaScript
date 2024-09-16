// Count minimum or maximum path on grid.
// Calulate the total sum from start to destination point.

const grid = [
    [5, 3, 2, 1],
    [1, 2, 10, 3],
    [4, 3, 1, 2]
];

function maxPathCount(grid, row = 0, col = 0, memo = {}) {
    const pos = row + "," + col;
    if (pos in memo) return memo[pos];

    // Check out-of-bound
    if (row >= grid.length || col >= grid[0].length) {
        return -Infinity; // Return a very small number as it's not a valid path
    }

    // Base case: if we're at the bottom-right corner
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return grid[row][col];
    }

    // Movements
    const rightPath = maxPathCount(grid, row+1, col, memo);
    const downPath = maxPathCount(grid, row, col+1, memo);

    memo[pos] = grid[row][col] + Math.max(rightPath, downPath);

    return memo[pos];
}

const result = maxPathCount(grid);
// console.log(result); // Output the maximum path sum

// Count minimum or maximum path on grid.
// Calulate the total sum from start to destination point.

const grid2 = [
    [5, 3, 2, 1],
    [1, 2, 10, 3],
    [4, 3, 1, 2]
];

function maxPathCount(grid2, row = 0, col = 0, memo = {}) {
    const pos = row + "," + col;
    if (pos in memo) return memo[pos];

    // Check out-of-bound
    if (row >= grid2.length || col >= grid2[0].length) {
        return Infinity; // Return a very small number as it's not a valid path
    }

    // Base case: if we're at the bottom-right corner
    if (row === grid2.length - 1 && col === grid2[0].length - 1) {
        return grid2[row][col];
    }

    // Movements
    const rightPath = maxPathCount(grid2, row+1, col, memo);
    const downPath = maxPathCount(grid2, row, col+1, memo);

    memo[pos] = grid2[row][col] + Math.min(rightPath, downPath);

    return memo[pos];
}

const result2 = maxPathCount(grid2);
console.log(result2); // Output the maximum path sum
