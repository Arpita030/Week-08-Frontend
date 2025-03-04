function validateEmail(email) {
    const emailPattern = /^abc@bridgelabz/;

    if (emailPattern.test(email)) {
        console.log(`The email ${email} is valid `);
    } else {
        console.log(`The email ${email} is invalid.`);
    }
}

validateEmail("abc@bridgelabz.co.in");  
validateEmail("abc@bridgelabz.com");    
validateEmail("abc@xyz.com");           
validateEmail("abcd@bridgelabz.com"); 