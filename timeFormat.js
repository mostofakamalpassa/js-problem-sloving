 

function convetToTimes(s){

    let [time, modifire] = s.split(" ");

   //let modifire = s.slice(8);
    let [hour, mininutes, seconds] = s.split(":");

    if(hour == '12'){
        hour = '00';
    }


    if(modifire.toString().toLowerCase() == 'PM'.toLowerCase()){

        hour = parseInt(hour, 10) + 12;
    }



    return hour+ ":"+mininutes+ ":"+seconds.substr(0,2);
}


let result = convetToTimes('2:30:33 PM')

console.log(result);