function secondLargest(array){

    let firstLargest = array[0];

    let  secondLargestNumber = array[0];

    for(let i = 0; i<array.length; i++){

        let element = array[i];

        if(element > firstLargest){
            secondLargestNumber = firstLargest
            firstLargest = element;
           
        }
        else if(element > secondLargestNumber){
            secondLargestNumber = element;
        }
    }

    return secondLargestNumber;
}


console.log(secondLargest([40, 50, 60,55]));