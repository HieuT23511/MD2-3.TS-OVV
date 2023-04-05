// tra ve so fibonacci thu k:
function Fibonacci(k: number):number {
    if (k <= 1) {
        return k;
    }
        return Fibonacci(k-1)+ Fibonacci(k-2);
}

// Tinh tong so fibonacci den vi tri so fibonacci thu k:
function sumFibonacci(k){
    let sum = 0;
    for (let i = 0; i <=k; i++) {
        sum += Fibonacci(i);
    }
    return sum;
}

console.log(sumFibonacci(5));

