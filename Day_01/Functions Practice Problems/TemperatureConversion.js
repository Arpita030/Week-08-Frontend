const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        console.log("Temperature out of range (0°C - 100°C).");
        return;
    }
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        console.log("Temperature out of range (32°F - 212°F).");
        return;
    }
    return (degF - 32) * 5/9;
}

readline.question("Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius: ", (choice) => {
    switch (choice) {
        case '1':
            readline.question("Enter temperature in Celsius: ", (degC) => {
                console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(parseFloat(degC))}°F`);
                readline.close();
            });
            break;
        case '2':
            readline.question("Enter temperature in Fahrenheit: ", (degF) => {
                console.log(`Temperature in Celsius: ${fahrenheitToCelsius(parseFloat(degF))}°C`);
                readline.close();
            });
            break;
        default:
            console.log("Invalid choice!");
            readline.close();
    }
});
