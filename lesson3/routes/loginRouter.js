const { Router} = require('express');
const loginRouter = Router();

const loginController = require('../controllers/LoginController')

loginRouter.get('/', loginController.loginUserGET);
loginRouter.post('/', loginController.loginUserPOST);

module.exports = loginRouter;
