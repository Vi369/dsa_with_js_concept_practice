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
    // return this.head; // return the head value (data)
}

// insert at the end
LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data); // Create a new node with the data
  
    if (!this.head) { // Check if the list is empty
      this.head = newNode; // If empty, set the new node as the head
      return this.head;
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


// delete first node (unlink)
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        throw new Error("List Empty!")
    }

    this.head = this.head.next;
}

// delete last node 
LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){ // if list is empty
        throw new Error("List is Empty!")
    }

    if(!this.head.next){ // if there is only one node in the list 
        this.head = null;
        return
    }

    let secondLast = this.head;

    while(this.head.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null; // this.head.next = null
}

// delete by given key
LinkedList.prototype.deleteByKey = function(key){
    if(!this.head){
        throw new Error("Empty list");
    }

    if(this.head.data === key){
        this.head = this.head.next;
        return;
    }

    let currentNode = this.head;
    while(!currentNode.next.data === key){
        if(currentNode.next === null){
            throw new Error("Key not Found in list")
        }
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;


    // sir jii wala logic 
    while(currentNode.next !==null){
        if(currentNode.next.data === key){
            currentNode.next = currentNode.next.next;
            return ;
        }
        currentNode = currentNode.next;
    }


}



// search given key node data 
LinkedList.prototype.search = function(key){
    let current = this.head
    if(!current){
        throw new Error("List is Empty!")
    }

    while(current){
        if(current.data === key){
            return true
        }
    }

    return false
}


// traversal 
LinkedList.prototype.printList = function(){
    let current = this.head;
    if(!current){
        throw new Error("List is Empty!")
    }

    let dataArray = []
    while(current){
        dataArray.push(current.data)
        current = current.next;
    }
    return dataArray;
}

const list = new LinkedList();

list.insertAtBeginning({ name: "Alice", age: 30 })
list.insertAtBeginning({ name: "Bob", age: 25 })
// list.insertAtEnd({c:30})
// list.insertAtEnd({d:50})

const printList = list.printList();

printList.forEach((data)=>{
    console.log(data)
})

console.log(JSON.stringify(list));