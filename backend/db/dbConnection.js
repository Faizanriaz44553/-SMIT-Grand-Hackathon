import mongoose from 'mongoose'


const dbConnection = async(URI)=>{
    try {
        await mongoose.connect(URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        res.send(error.message)
    }
}


export default dbConnection