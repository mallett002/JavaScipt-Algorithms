

export function MyNode(val, neighbors?) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

export function markVisitedAndCheckNeighbors(node, copy, visitedCopies) {
    visitedCopies[copy.val] = copy;

    node.neighbors.forEach((originalNeighbor) => {
        const existingCopyOfNeighbor = visitedCopies[originalNeighbor.val];

        if (existingCopyOfNeighbor) { // if there's a copy out there, use it
            copy.neighbors.push(existingCopyOfNeighbor);
        } else {
            const neighborCopy = new MyNode(originalNeighbor.val);
            
            copy.neighbors.push(neighborCopy);

            markVisitedAndCheckNeighbors(originalNeighbor, neighborCopy, visitedCopies);
        }
    });
}

function cloneGraph(node) {
    if (!node) return null;

    const visitedCopies = [];
    const copy = new MyNode(node.val);

    markVisitedAndCheckNeighbors(node, copy, visitedCopies);

    return copy;
}



// start a queue    
// put 1 in queue
// start queueing process (while nothing left in the queue)
// take the first item
    // process it
    // mark it as visited
    // look at its neighbors
    // if they haven't been visited & not currently in the queue, put them in the queue


