function sumOfArray(arr){

    let sum = 0;

    for(let i = 0; i< arr.length; i++){

        sum = sum + arr[i];
    }

    return sum;
}



console.log(sumOfArray([3,4,5,6,10,20,2]));