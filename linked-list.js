/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index.")
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index.")
    }

    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === idx) {
        currentNode.val = val;
        break;
      }
      currentNode = currentNode.next;
      count++;
    }
    return currentNode.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid Index.")
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    let currentNode = this.head;
    let previousNode = this.head;

    for (let i = 0; i < idx - 1; i++) {
      previousNode = previousNode.next;
    }
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let previousNode = this.head;

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index.")
    }

    if (idx === 0) {
      let removedNode = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) {
        this.tail = this.head;
      }
      return removedNode;
    }

    for (let i = 0; i < idx - 1; i++){
      previousNode = previousNode.next;
    }
    for (let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }

    if (idx === this.length - 1) {
      let removedNode = this.tail.val;
      previousNode.next = null;
      this.tail = previousNode;
      this.length -= 1;
      return removedNode;
    }

    previousNode.next = currentNode.next;
    this.length -= 1;
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) return 0;
    
    let currentNode = this.head;
    let sum = 0;
    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
