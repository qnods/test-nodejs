const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monsterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    element: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Monster = mongoose.model('monster', monsterSchema)


module.exports = Monster
