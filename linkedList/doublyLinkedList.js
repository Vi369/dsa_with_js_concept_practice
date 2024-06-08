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


// DoublyLinkedList.prototype.insertAtBeginning = function(data){
//     const newNode = new Node(data, this.head, null);
//     if(!this.head){ // if node null
//         this.head = newNode; // head value point newNode 
//         this.tail = newNode; // tail also point newNode
//         return;
//     }else{// if head is not null then 
//         this.head.prev = newNode;  // new node assign in prev value
//     }

//     this.head = newNode; // in both case head is pointing the newNode
// }


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
