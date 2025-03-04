let conversionType = parseInt(process.argv[2]); 
let value = parseFloat(process.argv[3]); 

switch (conversionType) {
    case 1: 
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2: 
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(2)} Meters`);
        break;
    case 3: 
        console.log(`${value} Inches = ${(value / 12).toFixed(2)} Feet`);
        break;
    case 4: 
        console.log(`${value} Meters = ${(value * 3.28084).toFixed(2)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter 1 for Feet to Inch, 2 for Feet to Meter, 3 for Inch to Feet, or 4 for Meter to Feet.");
}
