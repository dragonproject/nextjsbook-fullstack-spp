import mongoose from "mongoose"
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dragonproject2002:M2ocO8Injx4Et5gs@cluster0.e5umi3n.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")
    } catch (error) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB