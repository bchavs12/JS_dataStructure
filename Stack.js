// Stack implementation using array

class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop an element of the stack
  pop() {
    if (this.isEmpty) {
      console.log("Stack is empty");
      return null;
    }

    return this.stack.pop();
  }

  // Check if stack is empty
  isEmpty() {
    if (this.stack.length === 0) {
      console.log("The stack is empty");
      return this.stack.length === 0;
    };
    console.log("The stack is not empty")
  }

  // Get the top element of the stack
  peek() {
    return this.isEmpty() ? "Stack is empty" : this.stack[this.stack.length - 1];
  }

  // Display stack contents
  display() {
    console.log(`Stack contents: ${this.stack.join(" <- ")}`);
  }

}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

myStack.display();