const { Router} = require('express');
const signUpRouter = Router();

const signUpController = require("../controllers/SignUpController");

signUpRouter.get('/', signUpController.signUpGET);
signUpRouter.post('/', signUpController.signUpPOST);

module.exports = signUpRouter;
