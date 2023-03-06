

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

function insert(intervals: number[][], newInterval: number[]): number[][] {
    // create new list
    // loop over intervals
    // if newInterval comes before, add it before, then add the rest, return the rest
    // if newInterval comes after, add curr, dont add newInterval yet bc might need to merge with something later
    // else not b4 nor after, needs to merge
        // merge : lowest start and hightest end of the curr & newInterval
    
    // after looping, if make it here, we didn't insert newInterval, so we need to insert it
    // we didn't insert it yet, becuase above, we only inserted if it comes before curr
    // return your list

    const result: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        const curr = intervals[i];

        if (newInterval[1] < curr[0]) {
            const rest = intervals.slice(i, intervals.length);

            return [newInterval, ...rest];
        }

        if (curr[1] < newInterval[0]) {
            result.push(curr);
        } else {
            newInterval = [Math.min(curr[0], newInterval[0]), Math.max(curr[1], newInterval[1])];
        }
    }

    result.push(newInterval);

    return result;
};


























function bfs() {

}

function cloneGraph(node) {
    if (!node) return null;
    queue = new Queue())

}






