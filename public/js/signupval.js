const validatedForm = () =>{
    const userName = document.getElementById('userName')
    const userNameError = document.getElementById('userNameError')
    const email = document.getElementById('email')
    const emailError = document.getElementById('emaillError')
    const password1 = document.getElementById('password1')
    const password1Error = document.getElementById('password1Error')
    const password2 = document.getElementById('password2')
    const password2Error = document.getElementById('password2Error')
    
    if(userName.value == ""){
        userName.style.border = "1px solid red"
        userNameError.textContent = "Please provide a username"
        userNameError.style = "color: red"
        return false
    }else{
        userName.style.border = "1px solid green"
        userNameError.textContent = ""
    }

    if(email.value == ""){
        email.style.border = "1px solid red"
        emailError.textContent = "Please provide an email"
        emailError.style = "color: red"
        return false
    }else{
        email.style.border = "1px solid green"
        emailError.textContent = ""
    }

    if(password1.value == ""){
        password1.style.border = "1px solid red"
        password1Error.textContent = "Please enter password"
        password1Error.style = "color: red"
        return false
    }else{
        password1Type.style.border = "1px solid green"
        password1Error.textContent = ""
    }

    if(password2.value == ""){
        password2.style.border = "1px solid red"
        password2Error.textContent = "Please enter password"
        password2Error.style = "color: red"
        return false
    }else if(password2.value != password1.value){
        password2.style.border = "1px solid red"
        password2Error.textContent = "Password should be the same as the one entered above"
        password2Error.style = "color: red"
        return false
    }else{
        password2.style.border = "1px solid greeen"
        password2Error.textContent  = ""
    }

    
}