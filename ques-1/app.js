function promptForPositiveNumber() {
    let number;

    do {
        number = parseFloat(prompt("Please enter a positive number:"));
    } while (isNaN(number) || number <= 0);

    console.log(`You entered a positive number: ${number}`);
}

// Call the function to prompt the user
promptForPositiveNumber();


