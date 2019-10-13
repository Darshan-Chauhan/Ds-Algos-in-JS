class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }

  peek() {
    if(this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  push(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head) {
      this.head = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  pop() {
    if(!this.head) {
      return null;
    }

    this.head = this.head.next;
    return this.toArray();
  }

  toArray() {
    const allValues = [];
    let currentNode = this.head;

    while(currentNode) {
      allValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return allValues;
  }
}
