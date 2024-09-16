/*
Given two nodes (start and dest) in a directed acyclic graph
(DAG), return true if there is a directed path from start to
dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.

Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4


 */

const graph = {
    a: ['c', 'b'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['c', 'b'],
    e: ['f'],
    f: ['e']
};
// NOTE** visited = new Set() is applied when graph is cyclic.
function hasPathDFS(graph, start, dest){
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop()
        if (dest === node) {
            return true
        }
        if (!visited.has(node)) {  // if node is not visited then store in visited or set()
            visited.add(node)
            for (const neibhours of graph[node]) {
                stack.push(neibhours)
            }
        }
    }
    return false
}

console.log(hasPathDFS(graph, 'a', 'e'));

// BFS
function hasPathBFS(graph, start, dest){
    const queue = [start]
    const visited = new Set()

    while (queue.length > 0) {
        const node = queue.shift();
        if(dest === node) return true
        if (!visited.has(node)) {
            visited.add(node)
            for (const neibhours of graph[node]) {
                queue.push(neibhours)
            }
        }
    }
    return false
}
// console.log(hasPathBFS(graph, 'a', 'd'));

// Recursive way | no need declare stack, when recursion get automatically acts like a stack.
function hasPathRec(graph, start, dest, visited = new Set()) {
    if (start === dest) {
        return true;
    }

    // if graph already visited then return false.
    if (visited.has(start)) {
        return false;
    }

    visited.add(start);

    for (const neighbor of graph[start]) {
        if (hasPathRec(graph, neighbor, dest, visited)) {
            return true;
        }
    }
    
    return false;
}

console.log(hasPathRec(graph, 'a', 'd'));