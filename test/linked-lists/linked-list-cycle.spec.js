const {ListNode, hasCycle} = require('../../src/linked-lists/linked-list-cycle');

describe('hasCycle function', () => {
    test('returns true when "[1,2], pos = 0"', () => {
        const first = new ListNode(1);
        const second = new ListNode(2);

        first.next = second;
        second.next = first;

        const actual = hasCycle(first);

        expect(actual).toBe(true);
    });

    test('returns true when "[3,2,0,-4], pos = 1"', () => {
        const first = new ListNode(3);
        const second = new ListNode(2);
        const third = new ListNode(0);
        const last = new ListNode(-4);

        first.next = second;
        second.next = third;
        third.next = last;
        last.next = second;

        const actual = hasCycle(first);

        expect(actual).toBe(true);
    });

    test('returns false when "[3,2,0,-4], pos = -1"', () => {
        const first = new ListNode(3);
        const second = new ListNode(2);
        const third = new ListNode(0);
        const last = new ListNode(-4);

        first.next = second;
        second.next = third;

        const actual = hasCycle(first);

        expect(actual).toBe(false);
    });

    test('returns false when "head = [1], pos = -1"', () => {
        const first = new ListNode(1);

        const actual = hasCycle(first);

        expect(actual).toBe(false);
    });
});
