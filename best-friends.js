function bestFriends(array){

    let nameLenght = array[0].length;
    for(let i = 0; i < array.length; i++){
        if(array[i].length > nameLenght){

            nameLenght = array[i].length;
        }

    }

    return nameLenght;
}



console.log(bestFriends(['kamal', 'jamal','tomal', "mostofa kamal passa", 'anoar miya', 'habol']));