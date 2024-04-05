import mongoose, { Schema } from "mongoose";

/**
 * A structure which stores history of meter's values.
*/
const meterHistorySchema = new Schema({
    date: { type: Date, required: true },
    value: { type: Number, required: true },
});

/**
 * A structure which stores meter state.
 */
const stateSchema = new Schema({
    state: { type: String, enum: ["working", "alarm", "disconnected"], required: true },
    updateTime: { type: Date, required: true },
    description: { type: String, required: false },
});

const MeterHistory = mongoose.model("MeterHistory", meterHistorySchema);
const State = mongoose.model("State", stateSchema);

/**
 * A structure which stores data for meter (gauge), e.g. electricity meter.
*/
const meterSchema = new Schema({
    meterType: { type: String, enum: ["power", "water", "gas"], required: true },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    locationName: { type: String, required: true },
    value: { type: Number, required: true },
    unit: { type: String, required: true },
    valuesHistory: [{ type: Schema.Types.ObjectId, ref: "MeterHistory" }],
    state: { type: Schema.Types.ObjectId, ref: "State", required: true },
});

const Meter = mongoose.model("Meter", meterSchema);