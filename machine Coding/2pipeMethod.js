/*
Implement a utility function called pipe that accepts a series of functions as arguments. The pipe function should return a new function that, when called, processes an initial input by passing it through each of the provided functions in sequence, where the output of one function becomes the input for the next.

Function Signature

javascript
Copy code
pipe(fn1, fn2, fn3, ...fnN)(input);

*/

function pipe(...funs){
    return function(initialValue){
        return funs.reduce((acc, fun)=>{
            return fun(acc)
        }, initialValue)
    }
}

// functions
const getName = (object)=> object.name;
const makeUppercase = (str)=> str.toUpperCase();
const slice = (str)=> str.slice(0,4)

const method = pipe(getName, makeUppercase, slice)

const result = method({name: "vikas"})

console.log(result)