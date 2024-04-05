import express from "express";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import sanitize from "mongo-sanitize";

const app = express()

const rateLimiter = rateLimit({
    windowMs: 1000 * 5,
    limit: 10,
    legacyHeaders: false
})
app.use(rateLimiter);
app.use(bodyParser.json());
console.log("App");