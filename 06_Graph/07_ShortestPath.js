// Shortest Path
/*
Always use BFS for finding Shortest path, it find circular way to destination avoid snake path. 
save timecomplexity.


*/
// edges mean's undirected graph. so convert into directed graph.
const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
];

// Step1: convert edges into graph
function createGraph(edges){
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge;  // Destructed an array
        if (!(a in graph)) {
            graph[a] = []
        }
        if (!(b in graph)) {
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

function shortestPath(edges, start, dest){
    const graph = createGraph(edges); // it is converted graph from undirected to directed graph.

    const queue = [ [start, 0] ]
    const visited = new Set([start])

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === dest) {
            // return distance 
            return [node, distance]  // if in interview they told return node with distance or we can only return distance. 
        }
        // process the child
        for (const neibhours of graph[node]) {
            if (!visited.has(neibhours)) {
                visited.add(neibhours)
                queue.push([neibhours, distance + 1])
            }     
        }
    }
}


