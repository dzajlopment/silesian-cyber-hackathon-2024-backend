import { State } from "../models/models";
import factory from "./handleFactory"

export default {
    getAllStates: factory.getAll(State),
    getState: factory.getOne(State),
    createState: factory.createOne(State),
    patchState: factory.patchOne(State),
    deleteState: factory.deleteOne(State),
}