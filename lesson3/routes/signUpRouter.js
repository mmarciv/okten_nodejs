const { Router} = require('express');

const users = require('../db/users')

const signUpRouter = Router();

signUpRouter.get('/', (req, res) => {
    res.render('sign-up');
});

signUpRouter.post('/', (req, res) => {
    const found = users.find(element => element.email === req.body.email);
    if (!found) {
        const user = req.body;
        user.id = new Date().getTime();
        users.push(req.body);
        res.redirect('/users');
    } else {
        res.redirect('/error');
    }
});

module.exports = signUpRouter;
