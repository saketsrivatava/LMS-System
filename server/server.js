import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Configs/mongodb.js'
import { clerkWebhooks, stripeWebhooks } from './Controllers/webhooks.js'
import educatorRouter from './Routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './Configs/cloudinary.js'
import courseRouter from './Routes/courseRoutes.js'
import userRouter from './Routes/userRoutes.js'

//Initialize express
const app = express()

//Connect to database
await connectDB()
await connectCloudinary()

//Middlewares
app.use(cors())//allow those whose origin is same 
app.use(clerkMiddleware())

// Clerk Webhook (needs raw body)
//app.post('/clerk', express.raw({ type: 'application/json' }), clerkWebhooks)
//Routes

// Other JSON routes
// app.use(express.json())

app.get('/', (req,res)=> res.send("API working"))
app.post('/clerk', express.json(),clerkWebhooks)

app.use('/api/educator',express.json(),educatorRouter)
app.use('/api/course',express.json(),courseRouter)
app.use('/api/user',express.json(),userRouter)
app.post('/stripe',express.raw({type: 'application/json'}),stripeWebhooks)


//PORT 
const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

/* 
class ApiResponse{
constructor(statusCode,data,message = "Success"){
this.statusCode = statusCode
this.data = data
this.message = message
this.success = statusCode < 400
}
}
class ApiError extends Error{
constructor(
statusCode,
message = "Something wrong",
errors = [],
stack = ""){
super(message)
this.statusCode = statusCode
this.data = null
this.message = message
this.success = false,
this.errors = errors
}
}
*/

