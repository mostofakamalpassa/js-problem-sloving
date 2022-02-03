function woodCalculation(chire, table, bead){

    const chireWoodQty = 3;
    const tableWoodQty = 10;
    const beadWoodQty = 50;

    // calculation 

    const chirecal = chire * chireWoodQty;
    const tableCal = tableWoodQty * table;
    const beadCal = beadWoodQty * bead;

    //  All calcluaion 
    
    const calculations = chirecal + tableCal + beadCal;

    return calculations;

}


console.log(woodCalculation(5, 2, 3));