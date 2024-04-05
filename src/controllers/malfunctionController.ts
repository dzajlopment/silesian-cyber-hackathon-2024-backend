import { Malfunction } from "../models/models";
import factory from "./handleFactory"

export default {
    getAll: factory.getAll(Malfunction),
    getOne: factory.getOne(Malfunction),
    createOne: factory.createOne(Malfunction),
    patchOne: factory.patchOne(Malfunction),
    deleteOne: factory.deleteOne(Malfunction),
}