// implement stack and methods 
class Stack{
    constructor(){
        this.stack = []
    }
}

// push data on the stack
Stack.prototype.push = function(data){
    this.stack.push(data)
}

// remove data on the stack
Stack.prototype.pop = function(){
    return this.stack.pop()
}

// give the first data that pop out on the stack first 
Stack.prototype.peek = function(){
    return this.stack[this.stack.length - 1]
}

// check stack is empty or not 
Stack.prototype.isEmpty = function(){
    return this.stack.length === 0
}

// reverse the stack value 
Stack.prototype.reverse = function(){
    return this.stack.reverse()
}

// clear the value on stack 
Stack.prototype.clear = function(){
    this.stack = [];
}

// stack size 
Stack.prototype.size = function(){
    return this.stack.length
}

// create method that check given value is in the stack or not 
Stack.prototype.valueContains = function(value){
    return this.stack.includes(value)
}

// print the stack 
Stack.prototype.printStack = function(){
    return this.stack.slice()
    // const values = []
    // if(this.isEmpty()){
    //     return [] // no value Empty stack
    // }
    // for(let i = 0; i < this.size(); i++){
    //     values.push(this.stack[i])
    // }
    // return values;
}


// usage example 
// const bundle = new Stack()
// bundle.push("fruit")
// bundle.push("cars")
// bundle.push("papers")
// bundle.push("mobiles")

// const getAllValues = bundle.printStack()

// getAllValues.forEach((data)=>{
//     console.log(data + '\n')
// })


// example 2 
// const numbers = new Stack()
// numbers.push(1)
// numbers.push(2)
// numbers.push(3)
// numbers.push(4)
// const Values = numbers.printStack()

// Values.forEach((data)=>{
//     console.log(data + '\n')
// })

/** real-world example 
 * given expression is balance parenthisis or not */ 

function isBalanced(strings){
    const stack = []

    for(const char of strings){
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char)
        } else if(char === ')' || char === ']' || char === '}'){
            if(stack.length === 0){
                return false
            }

            let top = stack.pop();
            if(
                char === ')' && top !=='(' || 
                char === ']' && top !=='[' || 
                char === '}' && top !=='{'
            ){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("{[}"));    // false

