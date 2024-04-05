import { meterHistorySchema, meterSchema, stateSchema } from "../schemas/schemas";
import mongoose from "mongoose";

const MeterHistory = mongoose.model("MeterHistory", meterHistorySchema);
const State = mongoose.model("State", stateSchema);
const Meter = mongoose.model("Meter", meterSchema);

export {MeterHistory, State, Meter}