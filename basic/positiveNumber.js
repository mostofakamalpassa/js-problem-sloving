function positiveNumver(array){


    let positive = [];

    for(let i = 0; i< array.length; i++){

        if(array[i] < 0){
            break;
        }

        positive.push(array[i]);
        
    }
    return positive;
}

console.log(positiveNumver([3,4,5,6,-1,0,-3, -5,22]));


