// Enqueue -> Add an element to the end of the queue
// Dequeue -> remove the front of the queue
// isEmpty -> bool
// isFull -> bool
// peek -> see what's at the front of the queue without returning it

class Queue {
    _front;
    _rear;
    _maxSize;
    _items;

    constructor(maxSize) {
        this._maxSize = maxSize;
        this._front = -1;
        this._rear = -1;
        this._items = [];
    }

    isFull() {
        return this._rear === this._maxSize - 1;
    }

    isEmpty() {
        return this._front === -1;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('The queue is already full');

            return;
        }

        this._items.push(item);

        if (this._front === -1) {
            this._front++;
        }

        this._rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('The queue is already empty');

            return;
        }

        if (this._front === this._rear) {
            this._front = -1;
            this._rear = -1;
        } else {
            this._front++;
        }

        return this._items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this. _items[this._front];
    }
}

console.log('Starting a queue');
const queue = new Queue(5);

console.log('Adding an item');
queue.enqueue(1);
console.log('peeking: ', queue.peek());

console.log('Adding 4 more');
for (let index = 2; index <= 5; index++) {
    queue.enqueue(index);
}
console.log('peeking after 4 added: ', queue.peek());

console.log('attempting to add beyond maxItems limit: ');
queue.enqueue(6);

console.log('Dequeueing: ');
queue.dequeue();
console.log('peeking: ', queue.peek());

console.log('dequeueing the rest');
for (let index = 0; index < 5; index++) {
    queue.dequeue();
}
console.log('peeking now: ', queue.peek());