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

    printList(){
        let values = [];
        let current = this.head;
        while(current !==null){
            values.push(current.data);
            current = current.next;
        }
        return values;
    }

    search(key){
        if(!this.head){
            return "List not Exist!"
        }
        let current = this.head;
        while(current !==null){
            if(current.data === key){
                return true;
            }
        }
        return false;
    }
}

// implement method to insert node at the front
DoublyLinkedList.prototype.insertAtFront = function(data){
    const newNode = new Node(data,this.head, null);

    if(this.head !== null){
        this.head.prev = newNode;
    }

    this.head = newNode;
    if(this.tail === null){
        this.tail = newNode;
    }
}

// initilize DouublyLinkedList
const list = new DoublyLinkedList();

list.insertAtFront('tere sang yara');
list.insertAtFront('Hawa Hawa');
console.log(list.printList())

// Implement method to insert node at the end 
DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);

    if(this.tail !==null){
        this.tail.next = newNode;
        newNode.prev = this.tail;
    }
    this.tail = newNode;

    if(this.head === null){
        this.head = newNode;
    }
}

list.insertAtEnd('Udta hi phiru');
list.insertAtEnd('kya huwa tera wada');
console.log(list.printList());

// Implement method to insert node after the given position 
DoublyLinkedList.prototype.insertAfterThat = function(data, prevNode){
    // create node
    const newNode = new Node(data, prevNode.next, prevNode);

    if(prevNode.next === null){
        prevNode.next = newNode;
        // this.tail = newNode;
    }

    if(prevNode !==null){
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        // this.tail = newNode;
    }

    this.tail = newNode;
}
const prevNode = list.head.next; // data : tere sang yara
list.insertAfterThat('jumme ki raat', prevNode)
console.log(list.printList())

