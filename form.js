window.onload = function() {

    "use strict";

    var formHandle=document.forms.user_form;
    var outputMsg = document.getElementById ("hiddenmsg");

    // var form__Pass = "leonguyen";
    // var newPass = md5Encrypt(form__Pass);
    // console.log(newPass);
    

    formHandle.onsubmit = processForm

    function processForm(){

        var nameValue =formHandle.user_Name;
        var passValue =formHandle.user_Pass;

        if (checkLogin(nameValue.value, passValue.value) === "No username entered."){
            nameValue.style.background = "red";
            nameValue.focus();
            outputMsg.style.display="block";
            outputMsg.innerHTML ="No username entered.";
         
            
        } else if (checkLogin(nameValue.value, passValue.value) === "No password entered."){
            passValue.style.background ="red";
            passValue.focus();
            outputMsg.style.display="block";
            outputMsg.innerHTML ="No password entered.";
            
        } else if (checkLogin(nameValue.value, passValue.value) === "Invalid Username or Password.") {
            outputMsg.style.display="block";
            outputMsg.innerHTML ="Invalid Username or Password.";
           

        } else {
            outputMsg.style.display="block";
            outputMsg.innerHTML ="Welcome Back";
          
        }

        return false;
 
    };
};

