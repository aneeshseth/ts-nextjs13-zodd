import mongoose from 'mongoose'

export const connectToDB = async() => {
    await mongoose.connect("")
    console.log("connected to DB")
}