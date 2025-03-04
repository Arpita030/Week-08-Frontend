let n = parseInt(process.argv[2]);
let harmonic = 0;

if (n <= 0) {
    console.log("Enter a positive integer.");
} else {
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`Harmonic Number H(${n}) = ${harmonic.toFixed(5)}`);
}
