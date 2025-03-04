function validateEmail(email) {
    const emailPattern = /^abc([._\+\-][a-zA-Z0-9]+)*@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

    if (emailPattern.test(email)) {
        console.log(`The email ${email} is valid.`);
    } else {
        console.log(`The email ${email} is invalid.`);
    }
}

validateEmail("abc@bridgelabz.co");       
validateEmail("abc.xyz@bridgelabz.co");  
validateEmail("abc.x_yz@bridgelabz.co"); 
validateEmail("abc.xyz+hello@bridgelabz.co"); 
validateEmail("abc.xyz@bridgelabz.co.in"); 
validateEmail("abc.xyz@bridgelabz.co.us");
validateEmail("abc.xyz@bridgelabz.co.in.us"); 
validateEmail("abc.xyz@xyz.co");          
validateEmail("abc#xyz@bridgelabz.co");