class Stack{
    constructor(){
        this.stack = []
    }

    push(data){
        return this.stack.push(data)
    }

    isEmpty(){
        return this.stack.length ===0
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.stack.pop()
    }

    printStack(){
        let print = '';
        for(let i = 0; i<this.stack.length; i++){
            print += this.stack[i] + '\n'
        }
        return print;
    }

    clear(){
        this.stack = []
    }

    contains(data){
        return this.stack.includes(data)
    }
}

// usage example 

const myStack = new Stack();

myStack.push(20)
myStack.push(10)
myStack.push(30)
myStack.push(90)

const res = myStack.contains(90);

console.log(res);

console.log(myStack);

console.log(myStack.printStack())

myStack.pop()

console.log(myStack)