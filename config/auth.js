const roles = require('./roles')

module.exports.getRoles = rolesArg => (rolesArg || []).filter(role => roles[role])