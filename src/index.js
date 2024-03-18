import dotenv from "dotenv";
// import { Mongoose } from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=> {
    // work to do is app.on() using for error handling #task to do 
    app.on("error", (error)=> {
        console.log("Error: ", error);
    })
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is running at the port : ${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log("MONGO db connection failed !! ", err)
})








/*

// express import for initializing the app

import express from "express";

// initialising the app with express
const app = express();



// async await professional approach to connect database and error handling 
// try catch method used to catch and throw the error occured in the process of connecting a database

;( async () => {
    try {
        await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
    // app.on() is a listener function that is inbuilt in express,
    // it works to listen any event
    // here it is used to listen the error event to prevent having unknown error
        app.on("error", (error)=> {
            console.log("ERROR:", error);
            throw error;
        })

    // app.listen() shows the port where the database is running on
        app.listen(process.env.PORT, ()=> {
            console.log(`App os listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
} )()

*/
