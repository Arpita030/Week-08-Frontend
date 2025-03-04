let num = parseInt(process.argv[2]); 

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (num >= 1 && num <= 7) {
    console.log(weekDays[num - 1]); 
} else {
    console.log("Please enter a number between 1 and 7.");
}
