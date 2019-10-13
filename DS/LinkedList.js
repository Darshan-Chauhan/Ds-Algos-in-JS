class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    // If it is first node
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Assign next value of tail to new node
    this.tail.next = newNode;
    // Move tail position to new node
    this.tail = newNode;

    return this;
  }

  toArray() {
    const nodeValues = [];

    let currentNode = this.head;
    while(currentNode) {
      nodeValues.push(currentNode.toString());
      currentNode = currentNode.next;
    }

    return nodeValues;
  }

  prepend(value) {
    // Assign new node's next to head
    const newNode = new LinkedListNode(value, this.head);
    // Move head to new node
    this.head = newNode;

    // If no tail than assign tail to new node
    if(!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  deleteHead() {
    // Return null if head doesn't exist
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;

    if(this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  deleteTail() {
    const deletedTail = this.tail;
    // Return null if tail doesn't exist
    if(!deletedTail) {
      return null;
    }

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }
    
    let currentNode = this.head;
    while(currentNode.next) {
      if(!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    // After traversing, currentNode will be at tail - 1 position
    this.tail = currentNode;

    return deletedTail;
  }

  find(value) {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      if(value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;
    let deletedNode = null;

    if(this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    while(currentNode.next) {
      if(value !== undefined && currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // If tail needs to be deleted
    if(this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode; // Moves till tail so previous node becomes tail after loop
      currentNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}



// Complexities
// Time Complexity
// Access = O(n) => need to traverse list
// Search = O(n) => need to traverse list
// Insertion = O(1) => need to add at any poition just move the current so constant time
// Deletion = O(n) => need to traverse to figure out which node. If we want to delete head than O(1)


// Space Complexity
// O(n) => need as much space as number of values are given.
