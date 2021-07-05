let users = [];

class UserManager{
    static async addUser(user){
       try{
           let url = "http://localost:3000/api/regusers";
           let result = axios.post(url, user);
           return result;
        }
        catch(error){
            console.log(error);
        }
    }

    static getAllUsers(){
        try{
        let url = "http://localost:3000/api/regusers/list";
        let result = axios.get(url);
        return result.data;
        }
        catch(error){
            console.log(error);
        }
    }

    static async getUser(phoneno){
        let users;
        users = this.getAllUsers();
        let valid = true;
        for(let n = 0; n < users.length; n++){
            if(users[n].phoneno == phoneno){
                value = false;
            }
        }
        return users;
    }

    static async loginUser(userList){
        try{
            let url = "http://localhost:3000/api/regusers/login";
            let result = await axios.post(url,userList);
            return result;
        }
        catch(error){
            console.log(error.response);
        }
    }

    static saveUsers(users){
        localStorage.setItem("USERS", JSON.stringify(users));
    }
}