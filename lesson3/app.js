const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'templates'));

app.engine('.hbs', engine({ defaultLayout: false }));

app.use(apiRoutes);

app.listen(7000, () => {
    console.log('Serves has started on port 7000');
});
