// Greatest common divider 

/**
 * base case there be a one last stage value will be the same 
 * num1 == num2 return any value
 * if(num1 > num2) gcd(num1 - num2, num2) bade se chhote ko minus kar chhote ko hi send kartehai 
 * else num1 chhota hai so gcd(num2 - num1 , num1)
 */
  
// classic approach
function gcd(a, b){
    if(a==b){
        return a
    }

    if(a>b){
        return gcd(a-b, b)
    }else{
        return gcd(b-a, a)
    }
}

// console.log(gcd(12,18));


// reminder appraoch
function gcdWithReminderApproach(a, b){
    if(b=== 0){
        return a
    }

    return gcdWithReminderApproach(b, a%b) // swap the value
}

console.log(gcdWithReminderApproach(12,18))

// TODO: itterative approach 
