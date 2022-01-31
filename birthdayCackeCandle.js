function birthdayCakeCandles (candles){

    
    let count = 0;

    let max  = candles[0];

    for(let i  = 0 ;i < candles.length; i++){

        if(candles[i] > max){
            max  = candles[i];
        }
    }

    for(let j  = 0 ; j<candles.length; j++){

        if(candles[j] == max){
            count++;
        }
    }

    return count;

}


//console.log(birthdayCakeCandles([4,3,2,1,3]));



function processData(input) {
    // var inputs = (input.split(" "));
    // var n = parseInt(inputs[0]);
    // var str_candles = inputs[1].split(" ");
    let n = input.length;
    candles = []
    for (var i=0; i<n; i++) {
        candles.push(parseInt(input[i]));
    }
    var greatest = Number.NEGATIVE_INFINITY;
    var count = 0;
    for (var i=0; i<n; i++) {
        if (candles[i] > greatest) {
            greatest = candles[i];
        }
    }
    for (var i=0; i<n; i++) {
        if (candles[i] == greatest) {
            count += 1;
        }
    }
    console.log(count);
} 


processData([3,2,1,3])