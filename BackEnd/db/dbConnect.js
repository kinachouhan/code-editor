import mongoose from "mongoose";



export const dbConnect = async ()=>{
       try {
        const instance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`mongodb connected ${instance.connection.host}`)
        
       } catch (error) {
        
          console.log(error)
       }
}

