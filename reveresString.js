function reverseStrings(text){
    let reverseText = '';

    for(let i = 0; i < text.length; i++){
        
        reverseText = text[i] + reverseText;
    }

    return reverseText;

}



console.log(reverseStrings("hello mostofa kamal passa"));