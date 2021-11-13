function reverse(arr) {
    var i = 0;
    var j = arr.length-1;
    var temp;
    while(i<j){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }

    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
