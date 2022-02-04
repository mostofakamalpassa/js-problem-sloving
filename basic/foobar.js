function fooBar(numbers){

    for(let i = 1; i<=numbers; i++){

        if(i % 3 == 0 && i% 5 == 0){
            console.log('Foo Bar');
        }else if(i% 5 == 0){
            console.log("Bar")
        } else if(i% 3  == 0 ){
            console.log('foo');
        }

        console.log(i);
       
       
    }
}



console.log(fooBar(50));