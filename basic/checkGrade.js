function cheekGrade(marks){

    if(Array.isArray(marks) != true){
        return "place give valid array";
    }


    for(let i = 0; i< marks.length; i++){

        if(marks[i]> 80){
            return true;
        }
    }

    return false;
}


console.log(cheekGrade([60, 88, 70]));


