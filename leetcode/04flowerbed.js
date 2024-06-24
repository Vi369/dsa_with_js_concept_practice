// flowerbed count how may plant planted with condition
var canPlaceFlowers = function(flowerbed, n) {

    flowerbed = [0, ...flowerbed, 0];
    for(let i = 1; i<flowerbed.length-1; i++){
        if(n===0) break
        if(flowerbed[i]===0 && flowerbed[i-1]===0 && flowerbed[i+1]===0){
            flowerbed[i] =1
            n--;
        }
    }
    return n === 0;    
};