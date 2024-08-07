class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next 
        this.prev = prev
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
}


// Insert at the begining 
DoublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head, null)
    if(this.head !== null){
        this.head.prev = newNode; // if linkedlist has already have value then prev node point the newnode 
    }

    this.head = newNode; // in both case if head value is null or already have value , head pointing the newNode

    if(this.tail === null){ // if tail is null so tail value pointing the node
        this.tail = newNode
    }

}

// Insert at the end
DoublyLinkedList.prototype.intertAtEnd = function(data){
    const newNode = new Node(data, null, this.tail) // next ki value null tabhi to tail end hoga jab uska next null ko point karega or jo prev value hogi vo tail value hogi

    if(this.tail !== null){ // if tail has value so tail next value point the new node 
        this.tail.next = newNode
    }

    this.tail = newNode; // in both case if tail is null of tail has value tail pointing the newNode

    if(this.head === null){ // if in case head is null so, head value update in case if insert at begining then value head is null to ek value to hai na ye baat to head ko batani padegi
        this.head = newNode;
    }
}

// insert at the given after node
DoublyLinkedList.prototype.insertAfterAt = function(prevNode, data){
    if(!prevNode){
        return "Provide valid Prenode / prenode will not be empty! "
    }

    // creating node
    const newNode = new Node(data, prevNode.next, prevNode)

    
    // first case if ginev node is last node
    if(prevNode.next == null){
        this.tail = newNode
    }

    // second case if given node is not last node then
    if(prevNode.next !== null){
        prevNode.next.prev = newNode
    }

    prevNode.next = newNode
}




// delete at the first node 
DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return // list is empty
    }

    if(this.head === this.tail){ // it means only one value in the list
        this.head = null 
        this.tail = null
    }else{ // list has value
        this.head = this.head.next 
        this.head.prev = null
    }
}


// delete at the last value
DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        return // dll is empty
    }

    if(this.head === this.tail){// it means only one value in the list
        this.head = null
        this.tail = null
    }else{
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

// reverse the list 
DoublyLinkedList.prototype.reverse = function(){
    if(!this.head){
        return // list is empty
    }
    if(this.head === this.tail){
        return // because list has only one value
    }

    let current = this.head

    while(current){
        const swap = current.next 
        current.next = current.prev
        current.prev = swap

        // move to the next node
        current = current.prev
    }

    // update the tail and head value
    const tempHead = this.head
    this.head = this.tail
    this.tail = tempHead

}



// Delete node by Given key 
DoublyLinkedList.prototype.deleteByGivenKey = function(key){

    if(!this.head){
        return "Nothing in the list" // [] 
    }

    // case1:
    if(this.head.data === key){
        this.head = this.head.next
        this.head.prev = null
    }

    //case 2:
    if(this.tail.data === key){
        this.tail = this.tail.prev
        this.tail.next = null
    }

    // case3:

    let current = this.head
    while(current.next!==null){
        if(current.next.data === key){
            current.next = current.next.next;
            current.next.prev = current 
            return
        }
        // update the current value
        current = current.next;
    }

    return "Key Not Found";
}