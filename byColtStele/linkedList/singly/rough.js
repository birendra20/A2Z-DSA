class Node {
  constructor(val) {
    this.val = val; // value of the node
    this.next = null; // Pointer to the next node (initially null)
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // Head of the list (first node)
    this.tail = null; //Tail of the list (last node)
    this.length = 0; // Length of the list
  }

  // Method to add a new node to the end of the list
  push(val) {
    let newNode = new Node(val); // create a new node with the given value

    if (!this.head) {
      // if the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // otherwise, attach the new node to the current tail and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++; // Increment the length of the list
    return this;
  }

  // Method to remove last element

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
console.log("list is", list);

list.pop();
console.log("list test-1", list);

console.log("list.pop()", list.pop());
list.shift();
console.log("list test-2", list);
