function validateEmail(email) {
    const emailPattern = /^abc@/;

    if (emailPattern.test(email)) {
        console.log(`The email ${email} starts with 'abc@' and is valid.`);
    } else {
        console.log(`The email ${email} does not start with 'abc@' and is invalid.`);
    }
}

validateEmail("abc@bridgelabz.co.in");  
validateEmail("abc@xyz.com");          
validateEmail("abcd@xyz.com");        
validateEmail("ab@xyz.com");            