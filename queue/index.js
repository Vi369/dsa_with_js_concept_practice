class Queue{
    constructor(){
        this.queue = []
    }

    size(){
        return this.queue.length;
    }

    clear(){
        return this.queue = []
    }

    isEmpty(){
        return this.queue.length === 0
    }

    enqueue(data){
        return this.queue.push(data)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.queue.shift();
    }

    printQueue(){
        let print = '';
        for(let i=0; i<this.queue.length;i++){
            print += this.queue[i] + '\n'
        }
        return print
    }
}


// usage
const myQueue = new Queue();

console.log(myQueue)
myQueue.enqueue(20)
myQueue.enqueue(10)
myQueue.dequeue()
console.log(myQueue.size())
console.log(myQueue)