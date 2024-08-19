
 function validate() {
    var yourname = document.getElementById("yourname").value;
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var cpassword = document.getElementById("cpassword").value;
     var phone = document.getElementById("Phone").value;

    document.getElementById("text_name").innerText="";
      document.getElementById("text_name1").innerText="";
     document.getElementById("text_name2").innerText="";
     document.getElementById("text_name3").innerText="";
     document.getElementById("text_name4").innerText="";
     document.getElementById("text_name5").innerText="";
   

    let isValid=true;

    if (yourname == "") {
        document.getElementById("text_name").innerText="Enter a Username";
        isValid = false;
     }
     if (email == "") {
         document.getElementById("text_name1").innerText="Enter a email";
         isValid = false;
     }
     else if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
        document.getElementById("text_name1").innerText = "Enter a valid Gmail";
        isValid = false;
    }
    
    if (password === "") {
         document.getElementById("text_name2").innerText="Enter a Password";
        isValid = false;
    }
    else if(password.length<8){
        document.getElementById("text_name2").innerText="minimum 8 digit";
        isValid = false;
    }

    if (password !== cpassword|| cpassword.value!=password.value) {
        document.getElementById("text_name3").innerText="Confirm Password";
         isValid = false;
        
     }
    const phonePattern = /^[0-9]{10}$/;
            const normalizedPhone = phone.replace(/\D/g, '');
            
            if (phone === "") {
                document.getElementById("text_name4").innerText = "Enter a Phone number";
                 isValid = false;
             } else if (!phonePattern.test(normalizedPhone)) {
                 document.getElementById("text_name4").innerText = "Please enter a valid 10-digit phone number";
                 isValid = false;
             }
             if (isValid) {
                 document.getElementById("text_name5").innerText = "Successfully submitted";
                 isValid = false;
             }
            

             return isValid;  
      }