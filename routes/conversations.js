const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const conversationsController = require('../controllers/conversations');
const isAuth = require('../middleware/is-auth');
router.post('/create-group', isAuth, [
    body('name', "Enter a longer name").isLength({ min: 2 }),
    body('groupUsers', 'Need to add 2 users').custom(async (value, { req }) => {
        const users = JSON.parse(value);
        if (users.length < 3) {
            throw new Error('Need to add 2 users!');
        }
    })
], conversationsController.postCrateGroup);
router.post('/leave-group', isAuth, conversationsController.postLeaveGroup);
router.post('/message', [body('message', 'Enter a message').isLength({ min: 1 }).trim()], isAuth, conversationsController.postMessage);
module.exports = router;