import mongoose from 'mongoose'

export const connectToDB = async() => {
    await mongoose.connect(process.env.NODE_ENV)
    console.log("connected to DB")
}