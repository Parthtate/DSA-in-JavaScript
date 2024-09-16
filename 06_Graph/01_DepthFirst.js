// Depth First Traversal

const graph = {
    a: ['c', 'b'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['c', 'b'],
    e: ['f'],
    f: ['e']
};

// Iterative approach
function iterativeDFT(graph, start){
    const stack = [ start ];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();
        // Procees the node
        if (!visited.has(node)) {
            visited.add(node);
            
            // finding node's neibhours
            for (const neibhours of graph[node]) {
                if (!visited.has(neibhours)) {
                    stack.push(neibhours);
                }
            }
        }
    }
    return visited;
    
}

// console.log(iterativeDFT(graph, 'a'));
console.log(iterativeDFT(graph, 'b'));
console.log(iterativeDFT(graph, 'e'));

// Recursive
function recursiveDFT(graph, start, visited = new Set(), result = []){
    if (!visited.has(start)) {
        visited.add(start);
        result.push(start);

        // for neibhours
        for (const neibhours of graph[start]) {
            recursiveDFT(graph, neibhours, visited, result)
        }
    }
    return result
}
// console.log(recursiveDFT(graph, 'a'));
// console.log(recursiveDFT(graph, 'e'));