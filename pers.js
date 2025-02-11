let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Prevent selecting future date
let result = document.getElementById("result");

function calculateAge() {
    // Check if the input is valid
    if (!userInput.value) {
        result.innerHTML = "Please select a valid birthdate.";
        return;
    }

    let birthDate = new Date(userInput.value);

    // Extract date, month, and year from the birthdate
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  // Months are 0-based, so add 1
    let y1 = birthDate.getFullYear();

    // Get today's date
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;  // Months are 0-based, so add 1
    let y2 = today.getFullYear();

    // Initialize age variables
    let d3, m3, y3;

    // Calculate the year difference
    y3 = y2 - y1;

    // Handle month difference
    if (m2 > m1) {
        m3 = m2 - m1;
    } else if (m2 < m1) {
        y3--; // Subtract 1 year if the current month is before birth month
        m3 = 12 + m2 - m1;
    } else {
        m3 = 0; // Same month
    }

    // Handle day difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Subtract 1 month if the current day is before the birth day
        if (m3 < 0) {
            m3 = 11;
            y3--; // Subtract 1 year if the month count goes negative
        }
        d3 = getDaysInMonth(y1, m1) + d2 - d1; // Adjust day count using the days in the previous month
    }

    // Display the result
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

// Function to get the number of days in a given month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
