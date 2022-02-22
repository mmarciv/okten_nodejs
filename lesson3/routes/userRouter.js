const { Router} = require('express');

const users = require('../db/users')

const userRouter = Router();

userRouter.get('/', (req, res) => {
    let filteredUsers = users;
    const queryParams = req.query;
    const city = queryParams.city;
    const age = queryParams.age;
    if (age) {
        filteredUsers = filteredUsers.filter(value => value.age === age);
    }
    if (city) {
        filteredUsers = filteredUsers.filter(value => value.city === city);
    }
    res.render('users', { users: filteredUsers });
});

userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(element => element.id === +id);
    if (user) {
        res.render('user', {user});
    } else {
        res.render('notFound');
    }
})

module.exports = userRouter;
