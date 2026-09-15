const name = "Andonoff";

function printNameCountdown(inputName) {
    for (let i = 8; i >= 0; i--) {
        console.log(`${inputName} ${i}`);
    }
}

printNameCountdown(name);