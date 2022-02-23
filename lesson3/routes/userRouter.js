const { Router} = require('express');

const userRouter = Router();
const userController = require('../controllers/UserController');

userRouter.get('/', userController.getUsersGET);
userRouter.get('/:id', userController.getUserByIdGET)

module.exports = userRouter;
