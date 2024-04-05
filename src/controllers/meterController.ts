import { Meter } from "../models/models";
import factory from "./handleFactory"

export default {
    getAllMeters: factory.getAll(Meter),
    getMeter: factory.getOne(Meter),
    createMeter: factory.createOne(Meter),
    patchMeter: factory.patchOne(Meter),
    deleteMeter: factory.deleteOne(Meter),
}