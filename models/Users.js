const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
},{timestamps:true})
const user = mongoose.model('Users',UserSchema)
module.exports = user