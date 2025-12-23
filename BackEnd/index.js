import express from "express"
import dotenv from "dotenv"
import {dbConnect} from "./db/dbConnect.js"
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3200
dbConnect()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/user" , userRoute)


app.listen(PORT , ()=>{
     console.log("App is listening on this", PORT)
})