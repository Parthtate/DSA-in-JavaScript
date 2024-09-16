// Breadth First traversal
/* NOTE** Breadth FS has check first all neibhours then processing those values.
No need for recursive method
*/
const graph = {
    a: ['c', 'b'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['c', 'b'],
    e: ['f'],
    f: ['e']
};

// iterative
function breadthFS(graph, start){
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const node = queue.shift();

        // finding all neibhours
        for (const neibhours of graph[node]) {
            if (!visited.has(neibhours)) {
                visited.add(neibhours);
                queue.push(neibhours);
            }
        } 
    }
    return visited
}
console.log(breadthFS(graph, 'e'));