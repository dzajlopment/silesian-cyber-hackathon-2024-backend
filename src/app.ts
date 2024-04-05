import express from "express";
import bodyParser, { json } from "body-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import meterRouter from "./routes/meterRouter";
import meterHistoryRouter from "./routes/meterHistoryRouter"
import stateRouter from "./routes/stateRouter";
import accidentRouter from './routes/accidentRouter'
import malfunctionRouter from './routes/malfunctionRouter'

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

//Routes
app.use("/api/v1/meter", meterRouter);
app.use("/api/v1/meter-history", meterHistoryRouter);
app.use("/api/v1/state", stateRouter);
app.use("/api/v1/accident", accidentRouter);
app.use("/api/v1/malfunction", malfunctionRouter);

export default app;