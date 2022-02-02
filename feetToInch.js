function feetToInch(feet){

    if(feet <= 0){
        return " sorroy can not 0 or Nagative numbers";
    }
    const inch = 12;

    return feet * inch;
}


console.log(feetToInch(10));
console.log(feetToInch(-5));