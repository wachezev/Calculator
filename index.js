const inputValue = document.getElementById("user-input"); // Target the input or display element

// Add event listeners to operation buttons
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operator = e.target.innerText.trim(); // Get the clicked operator
        let lastValue = inputValue.innerText.slice(-1); // Get the last character

        if (operator === "=") {
            // Evaluate the expression safely
            try {
                if (!isNaN(lastValue)) {
                    inputValue.innerText = eval(inputValue.innerText); // Unsafe: replace with a proper math parser if needed
                }
            } catch (err) {
                inputValue.innerText = "Error"; // Handle invalid expressions
            }
        } else if (operator === "AC") {
            inputValue.innerText = "0"; // Reset to default value
        } else if (operator === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0"; // Remove last character, fallback to "0"
        } else {
            // Append operator if the last character is not another operator
            if (!isNaN(lastValue) || lastValue === "") {
                inputValue.innerText += operator;
            }
        }
    });
});

// Add event listeners to number buttons
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const number = e.target.innerText.trim(); // Get the clicked number

        // If the display is 0, replace it with the clicked number
        if (inputValue.innerText === "0") {
            inputValue.innerText = number;
        } else {
            inputValue.innerText += number;
        }
    });
});
