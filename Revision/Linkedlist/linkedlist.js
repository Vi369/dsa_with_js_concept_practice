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

    // print data
    printList(){
        let elements = [];
        let currentNode = this.head;

        while(currentNode !==null){
            elements.push(currentNode.data)
            currentNode = currentNode.next;
        }
        return elements;
    }

    // search data
    search(key){
        if(this.head === null){
            return 'List not Exist!'// 
        }

        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.data === key){
                return true
            }
            currentNode = currentNode.next;
        }
        return false;
    }
}


// Implement a method to insert at the beginning
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


// Q; Implement a method to insert at the end
LinkedList.prototype.insertAtTheEnd = function(data){
    const newNode = new Node(data)
    if(this.head === null){
        this.head = newNode;
    }else{
        let lastNode = this.head;

        while(lastNode.next !==null){
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
        newNode.next = null;
    }

    
}

/**
 * usage example
 */

list.insertAtTheEnd('wonder women')
console.log(list.printList());


// Implement a method to insert after given position 
LinkedList.prototype.insertAfterAt = function(data, preNode){
    const newNode = new Node(data, preNode.next);
    if(preNode === null){
        return "Provided Node can't be empty";
    }

    preNode.next = newNode;
}

const preNode  = list.head.next;
const data = 'aquaman'

list.insertAfterAt(data, preNode);

// console.log(list.printList());

// serach wonder wonmen
console.log(list.search('wonder women')) // true

/**
 * 
 */