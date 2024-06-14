// implementation of Queue
class Queue{
    constructor(){
        this.queue = []
    }
}

// methods 

// enqueue the data 
Queue.prototype.enqueue = function(data){
    this.queue.push(data)
}

// dequeue the data 
Queue.prototype.dequeue = function(){
    return this.queue.shift()
}

// peek value of queue 
Queue.prototype.peek = function(){
    return this.queue[0]
}

// clear
Queue.prototype.clear = function(){
    this.queue = []
}

// size 
Queue.prototype.size = function(){
    return this.queue.length
}

// print queue
Queue.prototype.print = function(){
    let print = []
    if (this.isEmpty()){
        return print // empty array or message 
    }
    for (let i = 0; i < this.queue.length; i++) {
        print += this.queue[i] + '\n'
    }
    return print
}

// isEmapty
Queue.prototype.isEmpty = function(data){
    return this.queue.length === 0
}

// example 
const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue("Hello");
myQueue.enqueue(true);

console.log("Queue elements:", myQueue.print()); // Output: [10, "Hello", true]

// Check queue size
console.log("Size of the queue:", myQueue.size()); // Output: 3

// Peek at the front element
console.log("Element at front (without removing):", myQueue.peek()); // Output: 10

console.log("Is the queue empty? ", myQueue.isEmpty()); // Output: false
console.log("Removed element:", myQueue.dequeue()); // Output: "Hello"
console.log("Removed element:", myQueue.dequeue()); // Output: true
console.log("Is the queue empty? ", myQueue.isEmpty()); // Output: false
console.log("Element in Queue:",myQueue.print()); //


// example 2 
