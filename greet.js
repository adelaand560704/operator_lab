const name = "Alan";

function printNameCountdown(inputName) {
    for (let i = 5; i >= 0; i--) {
        console.log(`${inputName} ${i}`);
    }
}

printNameCountdown(name);