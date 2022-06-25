
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head, visited = new Set()) => {
    if (!head) return false;
    if (!head.next) return false;
    if (visited.has(head)) return true;

    visited.add(head);

    return hasCycle(head.next, visited);
};

module.exports = {
    ListNode,
    hasCycle
};
