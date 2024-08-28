function convert() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (isNaN(temperature)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }

    let result;

    // Conversion logic
    if (from === "C" && to === "F") {
        result = (temperature * 9/5) + 32;
    } else if (from === "F" && to === "C") {
        result = (temperature - 32) * 5/9;
    } else if (from === "C" && to === "K") {
        result = temperature + 273.15;
    } else if (from === "K" && to === "C") {
        result = temperature - 273.15;
    } else if (from === "F" && to === "K") {
        result = (temperature + 459.67) * 5/9;
    } else if (from === "K" && to === "F") {
        result = (temperature * 9/5) - 459.67;
    } else if (from === "C" && to === "R") {
        result = (temperature + 273.15) * 9/5;
    } else if (from === "R" && to === "C") {
        result = (temperature - 491.67) * 5/9;
    } else if (from === "F" && to === "R") {
        result = temperature + 459.67;
    } else if (from === "R" && to === "F") {
        result = temperature - 459.67;
    } else if (from === "K" && to === "R") {
        result = temperature * 9/5;
    } else if (from === "R" && to === "K") {
        result = temperature * 5/9;
    } else {
        result = temperature; // If both units are the same
    }

    document.getElementById('result').textContent = `Result: ${result} ${to === "C" ? "°C" : to === "F" ? "°F" : to === "K" ? "K" : "°R"}`;
}
