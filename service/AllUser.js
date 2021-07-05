let userContent = document.getElementById('user-content');
displayUsers();
let x=1;
/**
 * Function to display all users to table.
 */
async function displayUsers()
{
    let users = await UserManager.getAllUsers();
    users.forEach(element => {
        
        let tr = DynamicElements.createTableRow();

        
        let thNumber = DynamicElements.createTableHeader();
        thNumber.innerText = x;
        x=x+1;
        tr.appendChild(thNumber);

        
        let tdName = DynamicElements.createTableData();
        tdName.innerText = element.name;
        tr.appendChild(tdName);

        
        let tdEmail = DynamicElements.createTableData();
        tdEmail.innerText = element.email;
        tr.appendChild(tdEmail);        

        
        let tdPhoneno = DynamicElements.createTableData();
        tdPhoneno.innerText = element.phoneno;
        tr.appendChild(tdPhoneno);

        
        let tdGender = DynamicElements.createTableData();
        tdGender.innerText = element.gender;
        tr.appendChild(tdGender);

        
        let tdDob = DynamicElements.createTableData();
        tdDob.innerText = element.dob;
        tr.appendChild(tdDob);

        
        let tdAddress= DynamicElements.createTableData();
        tdAddress.innerText = element.address;
        tr.appendChild(tdAddress);

        
        let tdPincode = DynamicElements.createTableData();
        tdPincode.innerText = element.pincode;
        tr.appendChild(tdPincode);
        userContent.appendChild(tr);
    });
}

