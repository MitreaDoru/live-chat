const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const authController = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');
router.post('/signup', [
    body('name', 'Enter a longer name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').custom(async (value, { req }) => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error('This email already exists!!!');
        }
        return true
    }),
    body('password', 'Please enter a password with only numbers and text and at least 5 characters').isLength({ min: 5 }).isAlphanumeric().trim(),
    body('image').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Please enter a .jpeg, jpg, .png photo!')
        }
        return true
    })
],
    authController.postSignup,
);
router.post('/login', [
    body('email', 'Wrong email').isEmail().custom(async (value, { req }) => {
        const user = await User.findOne({ email: value });
        if (!user) {
            throw new Error('Wrong email!');
        }
    }),
    body('password', 'Wrong password').isLength({ min: 5 }).isAlphanumeric().trim().custom(async (value, { req }) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                throw new Error("Can't find this email");
            }
            return bcrypt.compare(value, user.password).then(doMatch => {
                if (!doMatch) {
                    throw new Error('Wrong password!!');
                }
            })
        } catch (err) {
            throw new Error(err);
        }
    })
], authController.postLogin);
router.get('/images/:path', authController.getFile)
router.post('/change-image', isAuth, authController.postChangeImage)
module.exports = router;