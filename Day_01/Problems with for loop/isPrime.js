let num = parseInt(process.argv[2]);

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(num, isPrime(num) ? "is a Prime Number" : "is NOT a Prime Number");
