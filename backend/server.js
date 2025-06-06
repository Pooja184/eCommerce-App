

import express from 'express';
import 'dotenv/config';              // Loads environment variables from .env
import cors from 'cors';             // Enables Cross-Origin Resource Sharing
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';

//App config
const app=express();                // Initialize the Express application
const port = process.env.PORT || 4000;  
connectDB();                        // Connect to MongoDB database
connectCloudinary()                 // Configure Cloudinary for media handling

//Middlewares
app.use(express.json());            // Parse incoming JSON requests
app.use(cors());


//api endpoints
app.use('/api/user',userRouter);

app.get('/',(req,res)=>{
    res.send("API Working")
})

//start the server
app.listen(port,()=>console.log(`Server started on PORT ${port}`));