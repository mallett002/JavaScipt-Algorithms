
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Create a list of already seen
// recursively look through list, if come across one already seen, it's true (has loop)
const hasCycle = (head, visited = new Set()) => {
    if (!head) return false;
    if (!head.next) return false;
    if (visited.has(head)) return true;

    visited.add(head);

    return hasCycle(head.next, visited);
};

// This solution has O(1) complexity:
const otherSolutionHasCycle = (head) => {
    let fast = head,
        slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};
// ^^ Running laps. One slower than other. If the fast laps the slow, it's true (Has a loop)

module.exports = {
    ListNode,
    hasCycle,
    otherSolutionHasCycle
};
