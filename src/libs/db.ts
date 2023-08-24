import mongoose from 'mongoose'

export const connectToDB = async() => {
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL!)
    console.log("connected to DB")
}