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
    const newNode = new Node(data); // create a new node 
    newNode.next = this.head; // newNode next poit to the priviously first element
    this.head = newNode; // add head point the new node
    return this.head; // return the head value (data)
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

// given at pr itna karne ki jarurat ni pagle se hi privious node provide ki jayegi
// LinkedList.prototype.insertginAt = function(data, position){
//     if(position < 0 || !this.head ){ // position provide negative or if list is empty
//         throw new Error("Invalid Position or Empty list")
//     }

//     const newNode = new Node(data); // creating new node
//     let currentNode = this.head; // this variable poiting current list
//     let count = 1

//     if(position === 0 ){ // if given position is zero then
//         newNode.next = currentNode;
//         this.head = newNode;
//         return;
//     }

//     while(currentNode && count < position){
//         currentNode = currentNode.next;
//         count++
//     }

//     if(count !== position){
//         throw new Error("Invalid Position: exceeds list length");
//     }

//     if(currentNode){
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//     }else{ // if given position is at the end then
//         this.head.next = newNode;
//     }
// }


// insert at given position 
LinkedList.prototype.insertGivenAt = function(previousNode, data){
    if(!previousNode){
        throw new Error("Node Cannot be Null! Please Provide valid node")
    }

    const newNode = new Node(data, previousNode.next);
    previousNode.next = newNode;
}