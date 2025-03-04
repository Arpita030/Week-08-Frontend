const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let low = 1, high = 100;

console.log("Think of a number between 1 and 100.");

function findMagicNumber() {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        readline.question(`Is your number greater than ${mid}? (yes/no): `, (answer) => {
            if (answer.toLowerCase() === 'yes') {
                low = mid + 1;
            } else {
                high = mid;
            }

            findMagicNumber(); // Recursive call until low == high
        });
    } else {
        console.log(`Your magic number is: ${low}`);
        readline.close();
    }
}

findMagicNumber();
