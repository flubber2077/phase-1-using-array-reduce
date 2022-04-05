const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0;

const reducer = (accumulator, current) => {
    return accumulator + current;
}

totalBatteries = batteryBatches.reduce(reducer, 0);

