function validateUser(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;

    if(name.length<2){
        alert("Name should atleast be 2 letter word");
        return false;
    }

    var valid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(valid)){
        return true;
    }
    else{
        alert("Invalid Email address");
        return false;
    }

    // var validPassword=/^[a-zA-Z]w[0-9]

    if(password!=confirmPassword){
        alert("Confirm password does not match to password");
        return false;
    }
}