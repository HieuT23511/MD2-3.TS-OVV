let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let output : number[]=[];
// for (let i = 0; i < numbers[numbers.length-1]; i++) {
//     if(numbers.indexOf(i)=== -1){
//         output.push(i);
//     }
// }
let i = 0;
while (i<numbers[numbers.length-1]){
    if (numbers.indexOf(i)=== -1){
        output.push(i)
    }
    i++;
}
console.log(output);
