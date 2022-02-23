const users = require("../db/users");

class LoginController {

    loginUserPOST(req, res) {
        const user = users.find(element => (element.email === req.body.email && element.password === req.body.password));
        if (user) {
            res.render('user', {user});
        } else {
            res.render('error', {message: 'User not found'});
        }
    }

    loginUserGET(req, res) {
        res.render('login');
    }

}

module.exports = new LoginController()


