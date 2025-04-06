class Node {
  constructor(val) {
    this.val = val; // Value of the node
    this.next = null; // Pointer to the next node (initially null)
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // Head of the list (first node)
    this.tail = null; // Tail of the list (last node)
    this.length = 0; // Length of the list
  }

  // Method to add a new node to the end of the list
  push(val) {
    let newNode = new Node(val); // Create a new node with the given value
    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, attach the new node to the current tail and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // Increment the length of the list
    return this; // Return the updated list
  }

  pop() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;

    // Start with the first node
    let current = this.head;

    // This will eventually become the new tail
    let newTail = current;

    // Traverse the list to find the last node
    while (current.next) {
      newTail = current; // Keep track of the node before the last
      current = current.next; // Move to the next node
    }

    // Set the new tail and remove reference to the last node
    this.tail = newTail;
    this.tail.next = null;

    // Decrease the length
    this.length--;

    // If the list is now empty, reset head and tail
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return the removed (last) node
    return current;
  }

  // shift remove item from start

  shift() {
    // If the list is empty, there's nothing to remove
    if (!this.head) {
      return undefined;
    }

    // Store the current head so we can return it later
    let currentHead = this.head;

    // Move the head to the next node (removing the first node)
    this.head = currentHead.next;

    // Decrease the length of the list
    this.length--;

    // If the list is now empty, also reset the tail to null
    if (this.length === 0) {
      this.tail = null;
    }

    // Return the removed node (old head)
    return currentHead;
  }

  // Add a new node to the beginning of the list
  unshift(val) {
    // Create a new node with the given value
    let newNode = new Node(val);

    // If the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point the new node's next to the current head
      newNode.next = this.head;

      // Move the head pointer to the new node
      this.head = newNode;
    }

    // Increase the length of the list
    this.length++;

    // Return the list to allow method chaining
    return this;
  }

  // Method to retrieve a node at a specific index in the list
  get(index) {
    // If the index is out of bounds, return null
    if (index < 0 || index >= this.length) return null;

    // Start counting from the beginning of the list
    let counter = 0;

    // Start from the head node
    let current = this.head;

    // Traverse the list until we reach the desired index
    while (counter !== index) {
      current = current.next; // Move to the next node
      counter++; // Increment the counter
    }

    // Return the node found at the specified index
    return current;
  }

  // Method to update the value of a node at a specific index
  set(index, value) {
    // Use the 'get' method to find the node at the given index
    let foundNode = this.get(index);

    // If the node is found, update its value
    if (foundNode) {
      foundNode.value = value; // Note: should be 'val' if you're following the constructor property
      return true; // Indicate that the update was successful
    }

    // If the node is not found, return false
    return false;
  }

  // Method to insert a new node at a specific index in the list
  insert(index, val) {
    // If the index is out of bounds (negative or beyond the end), return false
    if (index < 0 || index > this.length) return false;

    // If inserting at the end of the list, use push and return true if successful
    if (index === this.length) return !!this.push(val);

    // If inserting at the beginning of the list, use unshift and return true if successful
    if (index === 0) return !!this.unshift(val);

    // Create a new node with the provided value
    let newNode = new Node(val);

    // Retrieve the node just before the target index
    let prev = this.get(index - 1);

    // Temporarily store the reference to the next node
    let temp = prev.next;

    // Set the new node's next to the current node at the target index
    newNode.next = temp;

    // Link the previous node to the new node
    prev.next = newNode;

    // Increment the list length to account for the new node
    this.length++;

    // Insertion was successful
    return true;
  }

  // Method to remove a node at a specific index from the list
  remove(index) {
    // If index is out of bounds, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // If index is 0, remove the first node
    if (index === 0) return this.shift();

    // If index is the last node, remove the last node
    if (index === this.length - 1) return this.pop();

    // Get the node just before the one to be removed
    let previousNode = this.get(index - 1);

    // Store the node to be removed
    let removed = previousNode.next;

    // Bypass the removed node by linking previous node to the next node
    previousNode.next = removed.next;

    // Decrement the length of the list
    this.length--;

    // Return the removed node
    return removed;
  }
}

// Create a new singly linked list
let list = new SinglyLinkedList();
console.log("list", list);

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log("list-4", list.get(4));
