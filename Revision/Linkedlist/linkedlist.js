// implemetation of linkedList 
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}


// implement a method insert at the begining data
LinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data)
    if(this.head === null){
        this.head = newNode;
    }else{
        newNode.next = this.head;
        this.head = newNode;
    }
}

/**
 * usage 
 */

const list = new LinkedList()

list.insertAtBegining('superman')
list.insertAtBegining('batman')
list.insertAtBegining('spiderman')
list.insertAtBegining('ironman')

// console.log(JSON.stringify(list));


// Q; inset at the end of list method implement

LinkedList.prototype.insertAtTheEnd = function(data){
    const newNode = new Node(data)
    if(this.head === null){
        this.head = newNode;
    }

    let lastNode = this.head;

    while(lastNode.next !==null){
        lastNode = lastNode.next;
    }

    lastNode.next = newNode;
    newNode.next = null;
}

/**
 * usage example
 */

list.insertAtTheEnd('wonder Women');
console.log(JSON.stringify(list));


