function calculateGrades() {
    const internalMarks = parseFloat(document.getElementById('internalMarks').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (internalMarks < 0 || internalMarks > 60) {
        resultsDiv.innerHTML = "Invalid internal marks. Must be between 0 and 60.";
        return;
    }

    const gradeThresholds = [91, 81, 71];
    const grades = ["O", "A+", "A"];

    resultsDiv.innerHTML += "<h2>To achieve the following grades, you need:</h2>";

    for (let i = 0; i < gradeThresholds.length; i++) {
        const requiredTotal = gradeThresholds[i];
        const neededFromFinal40 = requiredTotal - internalMarks;

        if (neededFromFinal40 <= 0) {
            resultsDiv.innerHTML += <p>${grades[i]} Grade: Already secured with your internals!</p>;
        } else if (neededFromFinal40 > 40) {
            resultsDiv.innerHTML += <p>${grades[i]} Grade: Not possible even with full marks in final exam.</p>;
        } else {
            const neededOutOf75 = (neededFromFinal40 / 40.0) * 75;
            resultsDiv.innerHTML += <p>${grades[i]} Grade: ${neededOutOf75.toFixed(2)} out of 75 in final exam</p>;
        }
    }
}