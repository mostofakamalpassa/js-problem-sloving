
let myArray = [4,5,6,7,8,9, 10, 12, 13];


console.log("array Length = " ,myArray.length);

myArray[3] = 55;

console.log(myArray);

// add element in array last position 
myArray.push(129);
myArray.push(6666);

console.log(myArray);

// remove element in array last poistion
let removeElement = myArray.pop();

console.log("remoe element = ", removeElement);

console.log(myArray);


console.log("array length  = ", myArray.length);