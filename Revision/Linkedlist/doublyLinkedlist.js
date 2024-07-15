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
            current = current.next;
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
/** usage example */
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
/** usage example */
list.insertAtEnd('Udta hi phiru');
list.insertAtEnd('kya huwa tera wada');
console.log(list.printList());

// Implement method to insert node after the given position 
DoublyLinkedList.prototype.insertAfterThat = function(data, prevNode){
    if(!prevNode){
        return "Provided node is Empty!"
    }

    // create node 
    const newNode = new Node(data, prevNode.next, prevNode);

    if(prevNode.next !== null){
        prevNode.next.prev = newNode;
    }

    prevNode.next = newNode;

    if(newNode.next === null){
        this.tail = newNode;
    }
}
/** usage example */
const prevNode = list.head.next; // data : tere sang yara
list.insertAfterThat('jumme ki raat', prevNode)
console.log("After added node given position:",list.printList())

// Implement method to Delete first Node 
DoublyLinkedList.prototype.unlinkFirstValue = function(){
    if(!this.head){
        return [] // list not exist
    }

    if(this.head === this.tail){ // only one value in the list
        this.head = null;
        this.tail = null;
        return
    }

    this.head = this.head.next;
    this.head.prev = null
}

/** usage example */
list.unlinkFirstValue()
console.log("After deleting first value List:",list.printList());
console.log(list)
console.log('head',list.head)
console.log('tail',list.tail)

// Implement method to delete Last node in the list
DoublyLinkedList.prototype.unlinkLastValue = function(){
    if(!this.tail){
        return [] // list not exist
    }

    if(this.head === this.tail){ 
        this.head = null;
        this.tail = null;
        return;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
}

/** usage Example */ 
list.unlinkLastValue()
console.log("After deleting last Value List: ", list.printList())


// Implement method to Delete node by given secific key 
DoublyLinkedList.prototype.UnlinkGivenKey = function(key){
    if(!this.head){
        return "List Not Exist!"
    }

    if(this.head.data === key){
        this.head = this.head.next;
        this.head.prev = null;
    }

    if(this.tail.data === key){
        this.tail = this.tail.prev;
        this.tail.next = null
    }

    let currentNode = this.head;
    while(currentNode.next !==null){
        if(currentNode.next.data === key){
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
            return;
        }
        currentNode = currentNode.next;
    }
    return "Key not Found!"
}

// usage example
list.UnlinkGivenKey('jumme ki raat');
console.log(list.printList());

// added some more data to the list 
list.insertAtEnd('raang de basanti')
list.insertAtEnd('munni badnam')
list.insertAtEnd('pinki hai paise walo ki')
console.log(list.printList())


// Implement method to reverse the list
DoublyLinkedList.prototype.reverseList = function(){
    if(!this.head){
        return "List is Empty!"
    }

    if(this.head === this.tail){
        return "List has only One value."
    }

    let current = this.head;
    let temp = 0;
    while(current !== null){
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        current = current.prev;
    }

    // update the head and tail value
    if(temp !==null){
        // this.tail = this.head
        // this.head = temp.prev;
        temp = this.head
        this.head = this.tail
        this.tail = temp;
    }
}
list.reverseList()
console.log(list.printList());