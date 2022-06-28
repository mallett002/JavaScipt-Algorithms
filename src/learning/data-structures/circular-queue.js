class CircularQueue {
    _front;
    _rear;
    _maxSize;
    _items;

    constructor(size) {
        this._maxSize = size;
        this._front = 0;
        this._rear = -1;
        this._items = [];
    }

    isFull() {
        return this._items.length === this._maxSize;
    }

    isEmpty() {
        return this._items.length === 0;
    }

    peek() {
        return this._items[this._front];
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('The queue is already full');
            return;
        }

        this._rear++;
        this._items[this._rear % this._maxSize] = item;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('The queue is already empty');
            return;
        }
        
        const item = this._items[this._front % this._maxSize];

        this._items[this._front % this._maxSize] = null;

        this._front++;

        return item;
    }

    printQueue() {
        console.log('queue: ', this._items);
        console.log('front: ', this._items[this._front]);
    }
}

console.log('Starting a queue');
const queue = new CircularQueue(5);

console.log('Adding an item');
queue.enqueue(1);
queue.printQueue();

console.log('Adding 4 more');
for (let index = 2; index <= 5; index++) {
    queue.enqueue(index);
}
queue.printQueue();

console.log('attempting to add beyond maxItems limit: ');
queue.enqueue(6);

console.log('Dequeueing 1: ');
queue.dequeue();
queue.printQueue();

console.log('dequeueing the rest');
for (let index = 0; index < 5; index++) {
    queue.dequeue();
}
queue.printQueue();