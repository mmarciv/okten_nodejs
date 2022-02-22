const { Router } = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signUpRouter = require('./signUpRouter');
const errorRouter = require('./errorRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/sign-up', signUpRouter);
routes.use('/error', errorRouter);
routes.use((req, res) => {
    res.render('not-found');
})

module.exports = routes;
