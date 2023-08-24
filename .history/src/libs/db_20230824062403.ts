import mongoose from 'mongoose'

export const connectToDB = async() => {
    console.log(process.env.DB_URL!)
    //await mongoose.connect(process.env.DB_URL!)
    console.log("connected to DB")
}