function validatePIN(pin) {
    const pinPattern = /^[1-9]\d{5}$/;

    if (pinPattern.test(pin)) {
        console.log(`The PIN Code ${pin} is valid.`);
    } else {
        console.log(`The PIN Code ${pin} is invalid.`);
    }
}

validatePIN("400088");  
validatePIN("12345");   