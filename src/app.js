import express from "express";

const app = express()

app.use( cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}))

export { app };