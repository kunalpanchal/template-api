
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

/**
 * @typedef User
 * @property {integer} id
 * @property {string} username.required
 * @property {string} password.required
 * @property {Date} last_access
 */

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    last_access: Date
})

UserSchema.pre('save', async next => {
    if (!this.isModified('password')) return next()
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (err) {
        return next(err)
    }
})

UserSchema.methods.validatePassword = async candidatePassword => {
    return bcrypt.compare(candidatePassword, this.password)
}

const UserModel = mongoose.model('User', UserCollection)
module.exports = UserModel
