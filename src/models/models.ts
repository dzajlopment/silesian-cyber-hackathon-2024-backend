import mongoose, { Schema } from "mongoose";

/**
 * A structure which stores history of meter's values.
*/
const meterHistorySchema = new Schema({
    date: { type: Date, required: true },
    value: { type: Number, required: true },
});

const MeterHistory = mongoose.model("MeterHistory", meterHistorySchema);

/**
 * A structure which stores meter state.
 */
const stateSchema = new Schema({
    state: { type: String, enum: ["working", "alarm", "disconnected"], required: true },
    updateTime: { type: Date, required: true },
    description: { type: String, required: false },
});

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

/** 
 * A structure which stores data for accidents, e.g. car crash.
*/

const accidentSchema = new Schema({
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    locationName: {type: String, required: true},
    victims: {type: Boolean, required: true},
    description: {type: String, required: false}
})
const Accident = mongoose.model("Accident", accidentSchema);


/** 
 * A structure which stores data for malfunctioning machines, e.g. a broken wheel.
*/
const malfunctionSchema = new Schema({
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    locationName: {type: String, required: false},
    device: {type: String, required: true},
    description: {type: String, required: false},
})
const Malfunction = mongoose.model("Malfunction", malfunctionSchema);

export {Meter, MeterHistory, State, Accident, Malfunction}