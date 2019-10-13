class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value;
  }
}


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.head;
  }

  enqueue(value) {
    let newNode = new LinkedListNode(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return newNode;
  }

  dequeue() {
    if(!this.head) {
      return null;
    }

    this.head = this.head.next;

    return this.head;
  }

  toArray() {
    const allValues = [];
    let currnetNode = this.head;

    while(currnetNode) {
      allValues.push(currnetNode.value);
      currnetNode = currnetNode.next
    }

    return allValues;
  }
}
