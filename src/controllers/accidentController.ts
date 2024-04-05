import { Accident } from "../models/models";
import factory from "./handleFactory"

export default {
    getAll: factory.getAll(Accident),
    getOne: factory.getOne(Accident),
    createOne: factory.createOne(Accident),
    patchOne: factory.patchOne(Accident),
    deleteOne: factory.deleteOne(Accident),
}