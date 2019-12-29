
const User = require('./../db/models/user')
const { ADMIN, USER, READONLYADMIN } = require('../config/roles')
const { getRoles } = require('../config/auth')

module.exports = {
    signup: async (req, res, next) => {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            role: [USER]
        })
    },
    login: async (req, res, next) => {
        let user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        delete user.password
        res.json(user)
    },
    addUser: async (req, res) => {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            role: [getRoles(req.body.roles)]
        })
    },
    getUsers: async (req, res) => {
        let users = await User.find()
        users = users.map(user => {
            delete user.password
            return user
        })
        return users
    },
    deleteUser: async (req, res) => {
        let user = await User.findOneAndDelete({
            username: req.params.username
        })
        return res.json({
            success: true
        })
    },
    editUser: async (req, res) => {
        let user = await User.findOneAndUpdate({ username: req.params.username }, {
            password: req.body.password,
            role: [getRoles(req.body.roles)]
        })

        return res.json({
            success: true
        })
    },
}