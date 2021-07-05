document.getElementById('submit').addEventListener('click',async function loginUser() 
{
    event.preventDefault();
    let Phoneno=document.getElementById('phoneno').value;
    let Password=document.getElementById('password').value;
    const userList = 
    {
        "phoneno":Phoneno,
        "password": Password
    };
    if(notNull() && checkPhoneno() && checkExistingPhoneno())
    {
        let result = await UserManager.loginUser(userList);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Login Successfully");
        window.location.href="Profile.html";

    }
    else if(!notNull())
    {
        document.getElementById('errorMessage').innerHTML="Need to Fill all the Details";
    }
    else if(!checkPhoneno())
    {
        document.getElementById('errorMessage').innerHTML="Enter valid Phone Number";
    }
    else if(await checkExistingPhoneno())
    {
        document.getElementById('errorMessage').innerHTML="Phone Number is not exists... Register to Login";
    }
});

function notNull()
{
    let Phoneno=document.getElementById('phoneno').value;
    let Password=document.getElementById('password').value;
    let valid=false;
    if (Phoneno.length>0 && Password.length>0) 
    {
        valid = true;
    }
    return valid;
}

function checkPhoneno()
{
    let phoneno = document.getElementById('phoneno').value;
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
    let result=await UserManager.getUser(Phoneno);
    return result;
}
