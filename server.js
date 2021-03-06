const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');

require("dotenv").config();

const port = process.env.PORT;

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());


const loanController = require('./controller/LoanController.js');
const UserController = require('./controller/UserController.js');
const LoginController = require('./controller/LoginController.js');
const ApplicationController = require('./controller/ApplicationController.js');


app.get('/', (req, res) => console.log('Welcome to ABC Financial Consultant!'));

//Loan Routes
app.get('/api/loantypes', loanController.getAllLoans);
app.get('/api/loantypes/:id', loanController.getLoanById);

//User Routes
app.post('/api/regusers', UserController.saveUser);
app.get('/api/regusers/list', UserController.getUsers);
app.put('/api/regusers/:phoneno', UserController.updateUser);
app.get('/api/regusers/application', ApplicationController.getAllUsersLoanApplicationDetails);
app.get('/api/regusers/:phoneno', UserController.getUser);
app.delete('/api/regusers/:phoneno', UserController.deleteUser);
app.post('/api/regusers/login', LoginController.loginUser);


//Application Routes
app.post('/api/loantypes/:id/apply', ApplicationController.saveApplication);
app.get('/api/application/:loan_id', ApplicationController.getApplicationByLoanId);
app.get('/api/application', ApplicationController.getApplications);
app.get('/api/application/:phoneno', ApplicationController.getApplicationByPhoneNumber);
app.put('/api/application/:phoneno', ApplicationController.updateApplication);
app.delete('/api/application/:phoneno', ApplicationController.removeApplication);




app.listen(port, () => console.log(`App listening on port ${port}!`))