function reverseArray(array){
    const reverseArray=[];
    for(let i=array.length-1;i>=0;i--){
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);