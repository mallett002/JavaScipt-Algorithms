class CircularQueue {
    _front;
    _rear;
    _maxSize;
    _items;

    constructor(size) {
        this._maxSize = size;
        this._front = -1;
        this._rear = -1;
        this._items = [];
    }

    isFull() {
        if (this._front === 0 && this._rear === this._maxSize - 1 || // full queue and hasn't looped back to start index
            this._front === this._rear + 1) { // if the rear is now one less than the front, it's full again
            return true;
        }

        return false;
    }

    isEmpty() {
        return this._front === -1 && this._rear === -1;
    }

    peek() {
        return this._items[this._front];
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('The queue is already full');
            return;
        }

        this._items.unshift(item);

        this._front++;

        if (this._rear === this._maxSize - 1) {
            this._rear = 0;
        } else {
            this._rear++;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('The queue is already empty');
            return;
        }

        if (this._front === this._maxSize - 1) {
            this._front = 0;
        } else {
            this._front++;
        }

        return this._items.splice(this._front, 1);
    }
}

console.log('Starting a queue');
const queue = new CircularQueue(5);

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

// console.log('Dequeueing: ');
// queue.dequeue();
// console.log('peeking: ', queue.peek());

// console.log('dequeueing the rest');
// for (let index = 0; index < 5; index++) {
//     queue.dequeue();
// }
// console.log('peeking now: ', queue.peek());