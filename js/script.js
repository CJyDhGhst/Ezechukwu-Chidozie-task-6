// Array of intern objects with 9 task scores each
const interns = [
    { name: "Peter", scores: [70, 75, 80, 85, 90, 95, 88, 92, 87] },
    { name: "John", scores: [60, 65, 70, 68, 72, 75, 78, 80, 82] },
    { name: "Eze", scores: [85, 88, 90, 92, 94, 96, 98, 97, 95] },
    { name: "Chioma", scores: [72, 74, 76, 78, 80, 82, 84, 86, 88] },
    { name: "Emmanuel", scores: [55, 58, 60, 62, 64, 66, 68, 70, 72] },
];

// Function to calculate average of the last 5 scores
function calculateAverage(scores) {
const lastFive = scores.slice(-5); 
const total = lastFive.reduce((sum, score) => sum + score, 0);
return (total / lastFive.length).toFixed(2);
}

// Loop through interns and log results
interns.forEach(intern => {
const average = calculateAverage(intern.scores);
console.log(`${intern.name}'s average score (last 5 tasks): ${average}`);
});
  