/* Robot Destination Problem.
There is a robot on an  m x n grid. The robot is initially located at the top-right
corner(i.e grid[0][0]). The robit tries to move to bottom-right corner
(i.e grid[m-1][n-1]). The robot can only move either down or right at any point in time.
*/
function countPath(grid, row=0, col=0, memo={}){

    const pos = row + "," + col

    // check out of bound
    if (
        row >= grid.length ||
        col >= grid[0].length ||
        grid[row][col] === 'X' // X or Wall or snake, crockodeil 
    ) {
        return 0
    }

    // check if you have arrived at given location, [2, 2]
    if (row === grid.length -1 && col === grid[0].length - 1) { // -1, because length start from 1
        return 1 // return 1 to calculate unwinding and return total steps
    }

    // return the caugh/ memoization result
    if (pos in memo) {
        return memo[pos]
    }

    // counting path 
    const rightPath = countPath(grid, row+1, col, memo)
    const downPath = countPath(grid, row, col+1, memo)

    memo[pos] = rightPath + downPath
    
    return memo[pos] 
}

const grid = [
    ['.', '.', 'X'],
    ['.', '.', '.'],
    ['.', '.', '.']
];
console.log(countPath(grid));