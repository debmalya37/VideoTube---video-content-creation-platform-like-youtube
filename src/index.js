import dotenv from "dotenv";
// import { Mongoose } from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})



connectDB();








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
