let inches = 42;
let feet = inches / 12;  
console.log(`(a) 42 inches is equal to ${feet} feet.`);

let lengthFeet = 60;
let widthFeet = 40;
let feetToMeter = 0.3048; 
let lengthMeters = lengthFeet * feetToMeter;
let widthMeters = widthFeet * feetToMeter;
console.log(`(b) Plot dimensions in meters: ${lengthMeters}m x ${widthMeters}m`);

let areaMeters = lengthMeters * widthMeters;  
let totalAreaMeters = areaMeters * 25;       
let metersToAcre = 0.000247105;             
let totalAreaAcres = totalAreaMeters * metersToAcre;
console.log(`(c) Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
