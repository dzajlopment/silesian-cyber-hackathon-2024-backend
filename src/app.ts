import express from "express";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";

const app = express()

const rateLimiter = rateLimit({
    windowMs: 1000 * 5,
    limit: 10,
    legacyHeaders: false
})

//Max 10 request per 5 seconds
app.use(rateLimiter);

//Add JSON support
app.use(bodyParser.json());

//Secure HTTP connections
app.use(helmet());

//Remove '$' and '.' characters which could be used for a malicious attack attempt
// app.use(ExpressMongoSanitize);

console.log("App");

export default app;