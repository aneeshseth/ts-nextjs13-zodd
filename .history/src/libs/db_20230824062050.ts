import mongoose from 'mongoose'

export const connectToDB = async() => {
    await mongoose.connect("mongodb+srv://user123:pass123@cluster0.lpm4tuy.mongodb.net/")
    console.log("connected to DB")
}