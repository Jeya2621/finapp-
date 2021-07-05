
/**
* Function to store the new user details to database.
*/
document.getElementById('signUpButton').addEventListener('click',async function addUser() 
{
    event.preventDefault();
    let Name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phoneno = document.getElementById('phoneno').value;
    let gender = document.getElementById('gender').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let pincode = document.getElementById('pincode').value;
    let addUsers = 
    {
        "name": Name,
        "email": email,
        "password": password,
        "phoneno" : phoneno,
        "gender" : gender,
        "dob" : dob,
        "address" : address,
        "city" : city,
        "pincode" : pincode
    };
    if(notNull() && checkEmail() && checkPassword() && checkPhoneno() && await checkExistingEmail())
    {
        let result = await UserManager.addUser(addUsers);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Registered Successfully");
        window.location.href="Login.html"

    }
    else if(!notNull())
    {
        document.getElementById('errorMessage').innerHTML="Need to Fill all the Details";
    }
    else if(!checkEmail())
    {
        document.getElementById('errorMessage').innerHTML="Enter valid Email Id";
    }
    else if(!checkPassword())
    {
        document.getElementById('errorMessage').innerHTML="Password is not valid";
    }
    else if(!checkPhoneno())
    {
        document.getElementById('errorMessage').innerHTML="Phone Number is not valid";
    }
    else if(!await checkExistingPhoneno())
    {
        document.getElementById('errorMessage').innerHTML="Phone Number already exists";
    }

});


function notNull()
{
    let Name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phoneno = document.getElementById('phoneno').value;
    let gender = document.getElementById('gender').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let pincode = document.getElementById('pincode').value;
    let valid=false;
    if (Name.length>0 && email.length>0 && password.length>0 && phoneno.length>0 && gender.length>0 && dob.length>0 && address.length>0 && city.length>0 && pincode.length>0) 
    {
        valid = true;
    }
    return valid;
}

function checkEmail()
{
    let email = document.getElementById('email').value;
    let status=false;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailPattern.test(email))
    {
        status=true;
    }
    return status;
}

function checkPassword()
{
    let password = document.getElementById('password').value;
    let status=false;
    var passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(passwordPattern.test(password))
    {
        status=true;
    }
    return status;
}

function checkPhoneno()
{
    let Phoneno = document.getElementById('phoneno').value;
    let status=false;
    var phonenoPattern = /^[6789]\d{9}$/;
    if(phonenoPattern.test(phoneno))
    {
        status=true;
    }
    return status;
}


async function checkExistingPhoneno()
{
    let Phoneno = document.getElementById('phoneno').value;
    let result=await UserManager.getUser(phoneno);
    return result;
}
