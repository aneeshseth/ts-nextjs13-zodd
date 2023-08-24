import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User