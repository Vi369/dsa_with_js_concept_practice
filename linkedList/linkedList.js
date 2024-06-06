class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}


// insert data at beginning
LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data);
    this.head = newNode;
    return this.head;
}

// insert at the end
LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data); // Create a new node with the data
  
    if (!this.head) { // Check if the list is empty
      this.head = newNode; // If empty, set the new node as the head
      return;
    }
  
    let last = this.head; // Start iterating from the head
  
    while (last.next) { // Loop until we reach the last node
      last = last.next; // Move to the next node in the list
    }
  
    last.next = newNode; // Set the `next` pointer of the last node to the new node
    return this.head;
  };
  
