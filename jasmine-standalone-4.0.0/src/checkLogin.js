//======== THIS FILE IS FOR THE checkLogin FUNCTION ==========

/** checkLogin Function
 * Validate input as a username and password.
 * Returns true if input validates.
 * @param {string} idIn
 */

 function checkLogin(form__Name, form__Pass) {
    "use strict";
    let result = false;
     
    
    if (form__Name === ""){
        result = "No username entered.";
    }
    else if (form__Pass === ""){
        result = "No password entered.";  
    } else {
        if (form__Name === "leo" && md5Encrypt(form__Pass) === "1da152c7b803ef3144bc0aad142b7b58"){
            result = true;
        }
        else {
            result = "Invalid Username or Password.";
        }
    }
    return result; // set back to the variable
}//END checkLogin

