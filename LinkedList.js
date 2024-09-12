class Node {
  constructor(value) {
    this.value = value
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node at the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      console.log(`${value} added as head`);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    console.log(`${value} added to linked list`);
  }

  // D

}