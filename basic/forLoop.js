

let array  = ['mostofa','kamal','jamal','tomal', 'anorar',666,777,444];


for(let i =0; i< array.length; i++){

    console.log(array[i]);
}


console.log("For Of Loop ");


for(let key of array){

    console.log(key);
}


console.log("while of loop");

let j = 0;

while(j < array.length){

    console.log(array[j]);

    j++;
}