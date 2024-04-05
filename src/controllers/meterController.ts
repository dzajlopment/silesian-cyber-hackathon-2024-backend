import { Meter } from "../models/models";
import factory from "./handleFactory"

export default {
    getAll: factory.getAll(Meter),
    getOne: factory.getOne(Meter),
    createOne: factory.createOne(Meter),
    patchOne: factory.patchOne(Meter),
    deleteOne: factory.deleteOne(Meter),
}