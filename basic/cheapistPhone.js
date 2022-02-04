
const phone = [
    {name:"samsung s5", price:45000, camera:15, storage: 50},
    {name:"Wlaton", price:15000, camera:15, storage: 40},
    {name:"shamomi", price:25000, camera:15, storage: 45},
    {name:"nokia", price:30000, camera:15, storage: 50},
    {name:"OPO", price:20000, camera:15, storage: 50},
]

function  cheapistPhone(phones){

    let lowestPrice = phones[0];

   // console.log(lowestPrice);
    for(let i = 0; i< phones.length; i++){

        if(phones[i].price < lowestPrice.price){
            lowestPrice = phones[i];
        }
    }


    return lowestPrice;
    
}
console.log(cheapistPhone(phone));