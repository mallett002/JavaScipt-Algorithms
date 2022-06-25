// pop -> get top elemeent
// isEmpty -> bool
// isFull -> bool
// peek -> see top element
// push -> put something onto the stack

class Stack {
    _top;
    _items;
    _maxSize;

    constructor(maxSize) {
        this._top = -1;
        this._items = [];
        this._maxSize = maxSize;
    }

    isFull() {
        return this._top + 1 === this._maxSize;
    }

    isEmpty() {
        return this._top === -1; 
    }

    push(item) {
        if (this.isFull()) {
            console.log('The stack is already full.');

            return;
        }

        this._items.push(item);
        this._top++;
    }

    pop() {
        if (this.isEmpty()) {
            
            console.log('The stack is already empty.');
            
            return;
        }

        this._top--;

        return this._items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.log('The stack is empty.');

            return;
        }

        return this._items[this._top];
    }

    printStack() {
        console.log(this._items);
    }
}

/* Using the Stack */
console.log('Init stack');
const stack = new Stack(5);

console.log('Peeking empty');
stack.peek();

console.log('Pushing 1');
stack.push(1)
console.log(stack.peek());

console.log('Pushing 2, 3, 4, 5');
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek());

console.log('Attempting to push beyond max size:');
stack.push(6);

console.log('Popping the top element');
console.log('popped: ', stack.pop());
console.log('Peeking top: ', stack.peek());

console.log('Printing stack:');
stack.printStack();

console.log('Attempting to pop beyond number of items: ');
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log('Peeking, should be empty: ');
stack.peek();
