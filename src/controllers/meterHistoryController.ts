import { MeterHistory } from "../models/models";
import factory from "./handleFactory"

export default {
    getAllMeterHistories: factory.getAll(MeterHistory),
    getMeterHistory: factory.getOne(MeterHistory),
    createMeterHistory: factory.createOne(MeterHistory),
    patchMeterHistory: factory.patchOne(MeterHistory),
    deleteMeterHistory: factory.deleteOne(MeterHistory),
}