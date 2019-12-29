
'use strict'

const mongoose = require('mongoose')

module.exports = app => {

    if (app.get('env') === 'development')
        mongoose.set('debug', true)

    const options = { useNewUrlParser: true, server: { socketOptions: { keepAlive: 1 }, useUnifiedTopology: true } }
    mongoose.connect(process.env.DB_URI, options, () => {
        console.log('DB connect')
    })

    mongoose.connection.on('connected', () => console.log('Mongoose default connection open to ' + process.env.DB_URI))
    mongoose.connection.once('open', () => console.log('Connected to mongodb!'))
    mongoose.connection.on('error', (err) => console.error('Mongoose default connection error: ' + err))
    mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination')
            process.exit(0)
        })
    })
}