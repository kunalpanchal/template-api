module.exports = {
    /**
     * This function comment is parsed by doctrine
     * @route POST /auth/signup
     * @group Auth - Operations about authentication
     * @param {string} email.body.required - username or email - eg: user@domain
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    signup: (req, res) => { },
     /**
     * This function comment is parsed by doctrine
     * @route POST /auth/login
     * @group Auth - Operations about authentication
     * @param {string} email.query.required - username or email - eg: user@domain
     * @param {string} password.query.required - user's password.
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    login: (req, res) => { },
     /**
     * This function comment is parsed by doctrine
     * @route POST /auth/forget-password
     * @group Auth - Operations about authentication
     * @param {string} email.query.required - username or email - eg: user@domain
     * @param {string} password.query.required - user's password.
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    forgetPassword: (req, res) => { },
    /**
     * This function comment is parsed by doctrine
     * @route GET /users/get-all
     * @group User - Operations about authentication
     * @param {string} email.query.required - username or email - eg: user@domain
     * @param {string} password.query.required - user's password.
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    getAllUsers: (req, res) => { },
}