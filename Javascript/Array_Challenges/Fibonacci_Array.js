function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=0; i<n-2; i++){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);
