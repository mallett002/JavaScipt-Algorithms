const {ListNode, hasCycle} = require('../../src/linked-lists/linked-list-cycle');

describe('hasCycle function', () => {
    test('returns true when there is a loop', () => {
        // [3,2,0,-4], pos = 1
        const first = new ListNode(3);
        const second = new ListNode(2);
        first.next = second;
        const third = new ListNode(0);
        second.next = third;
        const last = new ListNode(-4);
        last.next = second;

        const actual = hasCycle(first);

        expect(actual).toBe(true);
    });
});
