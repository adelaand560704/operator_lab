// 1. Define the array of quality scores
const scores = [85, 87, 90, 94, 88];

// 2. Calculate the average of the scores
const sum = scores.reduce((total, score) => total + score, 0);
const average = sum / scores.length;

// 3. Conditional check against the threshold of 95
let status;
if (average > 95) {
    status = "Meeting Expectations";
} else {
    status = "Needs Improvement";
}

// 4. Display the formatted output string
console.log(`Calculated Average: ${average.toFixed(2)} | Status: ${status}`);