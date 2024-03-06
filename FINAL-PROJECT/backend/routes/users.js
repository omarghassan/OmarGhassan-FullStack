const express = require('express');
const router = express.Router();

const UsersController = require("../controllers/usersController")

router.post('/signup', UsersController.signUp);

router.post('/login', UsersController.login);

module.exports = router;
