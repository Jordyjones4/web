function validateNewUser(){
    let username = document.getElementById('tb_username').value
    let password = document.getElementById('tb_password').value
    let confirmPassword = document.getElementById('tb_confirm').value
    let fullName = document.getElementById('tb_fullname').value
    let gender = document.getElementById('rbMale').checked ? document.getElementById('rbMale').value : 
        (document.getElementById('rbFemale').checked ? document.getElementById('rbFemale').value : null)
    let email = document.getElementById('tb_email').value
    let age = document.getElementById('tb_age').value
    let toc = document.getElementById('cb_toc').checked

    // empty field validations
    if(username.length <= 0)
        return alert('Username field cannot be empty')
    if(password.length <= 0)
        return alert('Password field cannot be empty')
    if(confirmPassword.length <= 0)
        return alert('Confirm Password field cannot be empty')
    if(fullName.length <= 0)
        return alert('Full Name field cannot be empty')
    if(gender == null)
        return alert('Gender must be chosen')
    if(email.length <= 0)
        return alert('Email field cannot be empty')
    if(age.length <= 0)
        return alert('Age field cannot be empty')
    if(!toc)
        return alert('Please agree to our Terms and Conditions')

    // further validations
    if(username.length < 8 || username.length > 12)
        return alert('Your username length must be between 8-12 characters long')
    if(password.length < 8 || password.length > 12)
        return alert('Your password length must be between 8-12 characters long')
    if(password != confirmPassword)
        return alert('Confirm password must be same as password')

    // email validations
    if(email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.startsWith('.') || email.startsWith('@') ||
    email.endsWith('@') || email.endsWith('.'))
        return alert('Email must be valid')

    if(Math.abs(email.indexOf('@') - email.indexOf('.')) == 1)
        return alert('Email must be valid')

    if(age < 18)
        return alert('Your age must be 18 or above to register')
    
    // success
    console.log([username, password, fullName, gender, email, age])
    alert('Succesfully register new user')
    window.location.href = '../HomePage/homepage.html'
    
}