for(var idx=1; idx<=100; idx++){
    if((idx%3)==0 && (idx%5)!=0){
        console.log("Fizz");
    }
    else if((idx%5)==0 && (idx%3)!=0){
        console.log("Buzz");
    }
    else if((idx%3)==0 && (idx%5)==0){
        console.log("Fizzbuzz");
    }
    else{
        console.log(idx);
    }
}