// implementation of doubly linkedlist
class Node{
    constructor(data,next = null,prev = null){
        this.data = data,
        this.next = next,
        this.prev = prev
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }
}

// implement method to insert node at the front
DoublyLinkedList.prototype.insertAtFront = function(data){
    
}