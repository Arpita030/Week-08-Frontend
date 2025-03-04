let money = 100, bets = 0, wins = 0;
const GOAL = 200;

while (money > 0 && money < GOAL) {
    bets++;
    let betResult = Math.random() < 0.5 ? -1 : 1; 

    if (betResult === 1) {
        wins++;
        money++;
    } else {
        money--;
    }

    console.log(`Bet: ${bets} | Money: ${money}`);
}

console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 200 ? "You reached your goal!" : "You went broke!");
