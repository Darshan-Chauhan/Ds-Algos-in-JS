class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    // If first node
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // Set tail's next to new node and node's prev to tail
    this.tail.next = newNode;
    newNode.prev = this.tail;

    // Set tail to new node
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head.prev = newNode;

    this.head = newNode;

    return this;
  }

  deleteHead() {
    if(!this.head) {
      return this;
    }

    if(!this.head.next) {
      this.head = null;
      this.tail = null;
      return this;
    } 
    this.head = this.head.next;
    this.head.prev = null;

    return this;
  }

  deleteTail() {
    if(!this.tail) {
      return;
    }

    if(!this.tail.prev) {
      this.tail = null;
      this.head = null;
      return this;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;

    return this;
  }

  reverse() {
    if(!this.head) {
      return this;
    }

    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode) {
      // Store next and prev node.
      nextNode = currentNode.next;
      prevNode = currentNode.prev;

      // Change next node of the current node so it would link to previous node.
      currentNode.next = prevNode;
      currentNode.prev = nextNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
    return this;
  }

  find(value) {
    if(!this.head) {
      return this;
    }

    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next
      }
    }

    return this;
  }

  delete(value) {
    if(!this.head) {
      return null;
    }
    let deletedNode = null;
    let currentNode = this.head;

    while(currentNode) {
      if(value !== undefined && currentNode.value === value ) {
        deletedNode = currentNode;
        if(deletedNode === this.head) {
          this.head = deletedNode.next;
          this.head.prev = null;
          return deletedNode;
        }

        if(deletedNode === this.tail) {
          this.tail = deletedNode.prev;
          this.tail.next = null;
          return deletedNode;
        }

        let nextNode = currentNode.next;
        let prevNode = currentNode.prev;

        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        return deletedNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return deletedNode;
  }

  toArray() {
    const values = [];

    let currentNode = this.head;
    while(currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }
}
