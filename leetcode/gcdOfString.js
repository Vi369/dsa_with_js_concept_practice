var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1){
        return ""
    }

    function gcd(a, b){
        if(b.length === 0){
            return a
        }

        return gcd(b, a.slice(0 , a.length % b.length))
    }
    return gcd(str1, str2)
};


let str1 = "ababab"
let str2 = "ab"

console.log(gcdOfStrings(str1, str2)) // expected output ab