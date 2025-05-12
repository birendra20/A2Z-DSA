// implement singly linked list

class Node {
  constructor(val) {
    this.val = val; // value of the node
    this.next = null; // pointer to the next node (initially  null)
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // head of the list (first node)
    this.tail = null; // Tail of the list (last node)
    this.length = 0; // length of the list
  }

  push(value) {
    //create a new node with the given value
    let newNode = new Node(value);

    // if the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //other wise, attach the new node to the current tail and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // increment the length of the list
    return list; // return the updated list
  }

  pop() {
    // if the list is empty, return undefined
    if (!this.head) return undefined;

    // start with the first node
    let current = this.head;

    // this will eventually become the new tail
    let newTail = current;

    // Traverse the lis to find the last node
    while (current.next) {
      newTail = current; // keep track the node before the last
      current = current.next; // Move to the next node
    }

    // set the new tail and remove reference to the last node
    this.tail = newTail;
    this.tail.next = null;

    // decrease the length
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // return the removed last node
    return current;
  }

  // Method to retrieve a node at a specific index in the list
  get(index) {

    // if the index is out of bounds, return null
    if (index < 0 || index >= list.length) return null

    // start from the head node
    let current = this.head;

    // start counting from the beginning of the list
    let counter = 0;

    // Traverse the list until we reach the desired index
    while (counter !== index) {
      current = current.next;  // Move to the next node
      counter++  // Increment the counter
    }

    // Return the node found at the specified index
    return current;
  }

  // Method to update the values of a node at a specific index
  set(index, value) {

    // use the 'get' method to find the node at the given index
    let foundNode = this.get(index);

    // if the node is found, update it's value
    if (foundNode) {
      foundNode.val = value;   // Note: val property is from node class
      return true;  // Indicate that the update was successful
    }

    return false
  }

  // remove item from start
  shift() {

    // if the list is empty, there's nothing to remove
    if (!this.head) {
      return undefined
    }

    // store the current head so we can return it later
    let currentHead = this.head;

    // Move the head to the next node (removing the first node)
    this.head = currentHead.next;

    // decrease the length of the list
    this.length--

    // if the list is now empty, also reset the tail to null
    if (this.length === 0) {
      this.tail = null
    }

    // return the removed node (old node)
    return currentHead;
  }

  // add a new node to the beginning of the list

  unshift(val) {

    // create a new node with a given value
    let newNode = new Node(val);

    // if the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point the new node's next to the current head
      newNode.next = this.head;

      // Move the head pointer to the new node
      this.head = newNode;
    }

    this.length++;

    return this

  }


}
