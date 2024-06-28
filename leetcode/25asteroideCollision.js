/*var asteroidCollision = function(asteroids) {
    let stack = []

    for(let asteroid of asteroids){
        let explode = false;
        
        while(stack.length > 0 && asteroid < 0 && (stack.length - 1) > 0){
            const rightAsteroid = stack.pop()

            if(Math.abs(asteroid) === rightAsteroid){
                explode  = true
                break;
            }else if(Math.abs(asteroid) < rightAsteroid){
                asteroid = 0;
                stack.push(rightAsteroid)
                break;
            }
        }

        if(!explode && asteroid !==0){
            stack.push(asteroid)
        }
        
    }
}; */


var asteroidCollision = function(asteroids){
    // stack 
    let stack = []

    for(let asteroid of asteroids){
        let collision = false;

        // collision
        while(stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0){
            let top = stack[stack.length - 1]

            if(top < -asteroid){
                stack.pop() // right moving asteroid explodes
            } else if(top === -asteroid){
                stack.pop() // both asteroid explods
                collision = true
                break;
            } else{ // top > left moving 
                collision = true // current asteroids explods
                break;
            }
        }
        // no collision, or current asteroid survive 
        if(!collision){
            stack.push(asteroid)
        }
    }
    // return 
    return stack;
}
