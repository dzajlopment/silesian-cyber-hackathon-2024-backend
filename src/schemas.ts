import mongoose, { Schema, Types } from "mongoose";

/**
 * A structure which stores history of meter's values.
*/
interface MeterHistory {
    date: Date;
    value: number;
}

/**
 * A structure which stores meter state.
 */
interface State {
    state: "working" | "alarm" | "disconnected";
    updateTime: Date,
    description?: string,
}

/**
 * A structure which stores data for meter (gauge), e.g. electricity meter.
*/
interface Meter {
    meterType: "power" | "water" | "gas";
    lat: number;
    lon: number;
    locationName: string;
    value: number;
    unit: string;
    valuesHistory: Types.DocumentArray<MeterHistory>;
    state: State;
}

const meterHistorySchema = new Schema<MeterHistory>({
    date: { type: Date, required: true },
    value: { type: Number, required: true },
});

const stateSchema = new Schema<State>({
    state: { type: String, enum: ["working", "alarm", "disconnected"], required: true },
    updateTime: { type: Date, required: true },
    description: { type: String, required: false },
});

const meterSchema = new Schema<Meter>({
    meterType: { type: String, enum: ["power", "water", "gas"], required: true },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    locationName: { type: String, required: true },
    value: { type: Number, required: true },
    unit: { type: String, required: true },
    valuesHistory: [{ type: Schema.Types.ObjectId, ref: "MeterHistory" }],
    // FIXME
    state: { type: Schema.Types.ObjectId, ref: "State", required: true },
});

const MeterHistory = mongoose.model("MeterHistory", meterHistorySchema);
const State = mongoose.model("State", stateSchema);
const Meter = mongoose.model("Meter", meterSchema);