function number(array) {
    let combinations=[];

    for(let i=0;i<=array.length;i++){
        for(let j=i+1;j<=array.length;j++){ //can not start loop from 0 else it will start comparing the starting element
            if(Math.abs(array[i])==Math.abs(array[j])){// math.abs takes the absolute values and we are comparing it here
                combinations.push(array[i])
                combinations.push(array[j])
            }
        }
    }
    return combinations;
}
var arr =[-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20]
console.log(number(arr))


