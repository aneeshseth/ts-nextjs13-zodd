import mongoose from 'mongoose'

export const connectToDB = async() => {
    console.log(process.env.NEXT_PUBLIC_DB_URL!)
    //await mongoose.connect(process.env.DB_URL!)
    console.log("connected to DB")
}