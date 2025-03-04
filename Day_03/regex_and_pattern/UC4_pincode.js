function validatePIN(pin) {
    const pinPattern = /^[1-9]\d{2}\s?\d{3}$/;

    if (pinPattern.test(pin)) {
        console.log(`The PIN Code ${pin} is valid.`);
    } else {
        console.log(`The PIN Code ${pin} is invalid.`);
    }
}

validatePIN("400088");  
validatePIN("400 088"); 
validatePIN("400088B"); 
validatePIN("12345");    
validatePIN("400088!"); 