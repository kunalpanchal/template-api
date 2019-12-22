const router = require('express').Router()
const userController = require('./../controllers/user')

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

module.exports = router;