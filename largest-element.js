function leargestElement(arrays){

    let largest = arrays[0];

    for(let i = 0; i< arrays.length; i++){

        if(arrays[i] > largest){
            largest = arrays[i];
        }
    }

    return largest;

}


console.log(leargestElement([5,6,7,100,50, 60]));
console.log(leargestElement([-2,-44,-22,-10]));