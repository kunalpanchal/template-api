const router = require('express').Router()
const userController = require('./../controllers/user')
const auth = []
const { ADMIN, USER, READONLYADMIN } = require('../config/roles')

/**
 * This function comment is parsed by doctrine
 * @route POST /auth/signup
 * @group Auth - Operations about authentication
 * @param {string} email.body.required - username or email - eg: user@domain
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/auth/signup', userController.signup)
/**
 * This function comment is parsed by doctrine
 * @route POST /auth/login
 * @group Auth - Operations about authentication
 * @param {string} email.body.required - username or email - eg: user@domain
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/auth/login', userController.login)
/**
 * This function comment is parsed by doctrine
 * @route POST /auth/forget-password
 * @group Auth - Operations about authentication
 * @param {string} email.body.required - username or email - eg: user@domain
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/auth/forget-password', userController.forgetPassword)

router.post('/auth/add-user', auth([ADMIN]), userController.addUser)
router.get('/auth/get-users', auth([ADMIN]), userController.getUsers)
router.delete('/auth/user/:username', auth([ADMIN]), userController.deleteUser)
router.put('/auth/user/:username', auth([ADMIN]), userController.editUser)

module.exports = router;