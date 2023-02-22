const { body } = require('express-validator');

const registerRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('gender').notEmpty().withMessage('Gender is required'),
]

module.exports = { registerRules }