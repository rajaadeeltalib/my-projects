let username = document.getElementById("username");
let password = document.getElementById("password");
let code = 1;

function validateForm(){
    if (username.value == "")
    {
        document.getElementById("userError").innerHTML = "Username is Empty";
        code = 0;
    }
    else if(username.value.length < 3 )
    {
        document.getElementById("userError").innerHTML = "Username require min 3 characters";
        code = 0;
    }
    else
    {
        document.getElementById("userError").innerHTML = "";
        code = 1;
    }

    if (password.value == "")
    {
        document.getElementById("passError").innerHTML = "Password is Empty";
        code = 0;
    }
    else
    {
        document.getElementById("passError").innerHTML = "";
        code = 1;
    }

    if (code)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}