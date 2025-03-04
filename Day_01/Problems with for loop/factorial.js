let n = parseInt(process.argv[2]);

function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers.";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(`${n}! = ${factorial(n)}`);
