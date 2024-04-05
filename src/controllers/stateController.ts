import { State } from "../models/models";
import factory from "./handleFactory"

export default {
    getAll: factory.getAll(State),
    getOne: factory.getOne(State),
    createOne: factory.createOne(State),
    patchOne: factory.patchOne(State),
    deleteOne: factory.deleteOne(State),
}