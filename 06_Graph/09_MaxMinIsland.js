/*
Write a function, minimumIsland, that takes in a grid 
containing Ws and Ls. W represents water and L represents lands.
An island is a vertically or horizontally connected region of land.
*/

const grid = [
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W']
];

function minIslandSize(grid){
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let smallestSize = Infinity

    function exploreSize(r, c){
        const pos = r + ',' + c;

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'W' ||
            visited.has(pos) 
        ) {
            return 0
        }

        visited.add(pos)
        let size = 1

       size += exploreSize(r+1, c)
       size += exploreSize(r-1, c)
       size += exploreSize(r, c+1)
       size += exploreSize(r, c-1)

       return size
    }
    

    // traverse the grid with the help of loop
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) 
                {
                const size = exploreSize(r, c) 
                if (size < smallestSize){
                    smallestSize = size
                }

            }            
        }        
    }
    return smallestSize === Infinity ? 0 : smallestSize;
}
console.log(minIslandSize(grid));


function maxIslandSize(grid){
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let greatestSize = Infinity

    function exploreSize(r, c){
        const pos = r + ',' + c;

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'W' ||
            visited.has(pos) 
        ) {
            return 0
        }

        visited.add(pos)
        let size = 1

       size += exploreSize(r+1, c)
       size += exploreSize(r-1, c)
       size += exploreSize(r, c+1)
       size += exploreSize(r, c-1)

       return size
    }
    

    // traverse the grid with the help of loop
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) 
                {
                const size = exploreSize(r, c) 
                if (size > greatestSize){
                    greatestSize = size
                }

            }            
        }        
    }
    return greatestSize === Infinity ? 0 : greatestSize;
}
console.log(maxIslandSize(grid));