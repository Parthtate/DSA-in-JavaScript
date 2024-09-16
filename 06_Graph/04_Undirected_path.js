/*
// NOTE** only edges means it is a undirected graph.
const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
];

    

Write a function, undirectedPath, that takes in an array of
edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

Step1: Convert edges into adjeceny list or directed graph 

const graph = {
    a: [b],
    b: [a, c],
    c: [a],
}
loop => check if DOES NOT exist, then add key => push both nodes into each other.
*/

const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
];

// Convert undirected path to adjceny list.
function createGraph(edges){
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge; // Destructed an array.

        if (!(a in graph)) {
            graph[a] = []
        }
        if(!(b in graph)) {
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

// DFS
function hasPathDFS(graph, start, dest){
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop()

        if (node === dest) {
            return true
        }
        if (!visited.has(node)) {
            visited.add(node)

            for (const neibhours of graph[node]) {
                stack.push(neibhours)
            }
        }
    }
    return false

}

// both function combination
function bothFuntionbundle(edges, start, dest){
    const graph = createGraph(edges)
    return hasPathDFS(graph, start, dest)
}
console.log(bothFuntionbundle(edges, 'a', 'd'));