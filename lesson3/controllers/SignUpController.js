const users = require("../db/users");

class SignUpController {

    signUpPOST(req, res) {
        const found = users.find(element => element.email === req.body.email);
        if (!found) {
            const user = req.body;
            user.id = new Date().getTime();
            users.push(req.body);
            res.redirect('/users');
        } else {
            res.redirect('/error');
        }
    }

    signUpGET(req, res) {
        res.render('sign-up');
    }

}

module.exports = new SignUpController()


