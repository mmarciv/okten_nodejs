const { Router} = require('express');

const users = require('../db/users')

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
});

loginRouter.post('/', (req, res) => {

    const user = users.find(element => (element.email === req.body.email && element.password === req.body.password));
    if (user) {
        res.render('user', {user});
    } else {
        res.render('error', {message: 'User not found'});
    }

});

module.exports = loginRouter;
