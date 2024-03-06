const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UsersModel = require("../models/usersModel")

const signUp = async (request, response) => {
    const { name, email, password } = request.body;

    // Simple validation
    if (!name || !email || !password)
        return response.status(400).send('Please enter all fields');

    // Check if user exists
    const userExists = await UsersModel.findOne({ email });
    if (userExists) return response.status(400).send('User already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        const savedUser = await newUser.save();
        response.send(savedUser);
    } catch (error) {
        response.status(400).send(error);
    }
}

const login = async (request, response) => {
    const { email, password } = request.body;

    // Simple validation
    if (!email || !password)
        return response.status(400).send('Please enter all fields');

    // Check if user exists
    const user = await UsersModel.findOne({ email });
    if (!user) return response.status(400).send('User does not exist');

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return response.status(400).send('Invalid password');

    // Create and assign token
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    response.header('auth-token', token).send(token);
}

module.exports = { signUp, login }