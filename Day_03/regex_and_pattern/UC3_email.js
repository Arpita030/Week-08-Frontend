function validateEmail(email) {
    const emailPattern = /^abc@bridgelabz\.co/;

    if (emailPattern.test(email)) {
        console.log(`The email ${email} is valid`);
    } else {
        console.log(`The email ${email} is invalid.`);
    }
}

validateEmail("abc@bridgelabz.co.in");  
validateEmail("abc@bridgelabz.co.com"); 
validateEmail("abc@bridgelabz.com");   
validateEmail("abc@xyz.co");            
validateEmail("abcd@bridgelabz.co");    