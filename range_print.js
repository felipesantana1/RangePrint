function printRange(start,skip,end) {
    
    if(skip === undefined) {
        
        skip = 1;
    }
    if(end === undefined) {

        end = start;
        start = 0;

    }
    
    for(var i = start; i < end; i+= skip) {

        console.log(i);
    }
}
printRange(10,2,100);