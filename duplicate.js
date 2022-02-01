function duplicateValue(array){
    
    let uniqueNumber = [];

    // for(let i = 0; i<= array.length; i++){

    //     if(!uniqueNumber.includes(array[i])){

    //         uniqueNumber.push(array[i]);
    //     }
    // }
    // uniqueNumber.pop();
    // return uniqueNumber;


    for(let element of array){

        if(uniqueNumber.indexOf(element) == -1){
            uniqueNumber.push(element);
        }
    }


    return uniqueNumber;

    
}


console.log(duplicateValue([3,4,5,1,2,3,4,5,6,3]));