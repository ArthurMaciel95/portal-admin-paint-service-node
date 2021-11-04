const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    },
    secret_token: {
        type: String,
        required: false
    },
    secret_token_time: {
        type: Date,
        required: false,
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },

})



module.exports = mongoose.model('users', User)