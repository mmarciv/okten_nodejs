const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'templates'));

app.engine('.hbs', engine({ defaultLayout: false }));

/* users */
const users = [];

/* routes */
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
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

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', (req, res) => {
    const user = users.find(element => (element.email === req.body.email && element.password === req.body.password));
    if (user) {
        res.render('user', {user});
    } else {
        res.redirect('/error');
    }
});

app.get('/users', (req, res) => {
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

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(element => element.id === +id);
    if (user) {
        res.render('user', {user});
    } else {
        res.render('notFound');
    }
})

app.get('/error', (req, res) => {
    res.render('error');
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(7000, () => {
    console.log('Serves has started on port 7000');
});
