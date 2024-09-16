// Grid island problem

const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'W', 'W'],
    ['L', 'W', 'L', 'L', 'L']
];

function islandCount(grid){

    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let count = 0

    function dfs(r, c){
        const pos = r + ',' + c;

        if (
            r < 0 ||
            r >= rows || 
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'W' ||
            visited.has(pos) 
        ) {
            return
        } else {
            visited.add(pos)
        }

        // for movement T,B,L,R
        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
             
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
                count++
                dfs(r, c)
            }
        }        
    }
    return count
}
console.log(islandCount(grid));