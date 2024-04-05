import { MeterHistory } from "../models/models";
import factory from "./handleFactory"

export default {
    getAll: factory.getAll(MeterHistory),
    getOne: factory.getOne(MeterHistory),
    createOne: factory.createOne(MeterHistory),
    patchOne: factory.patchOne(MeterHistory),
    deleteOne: factory.deleteOne(MeterHistory),
}