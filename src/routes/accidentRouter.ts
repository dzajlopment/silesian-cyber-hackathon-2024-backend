import express from "express"
import accidentController from "../controllers/accidentController"

const router = express.Router();

router.route("/")
    .post(accidentController.createOne)
    .get(accidentController.getAll)

router.route("/:id")
    .patch(accidentController.patchOne)
    .delete(accidentController.deleteOne)
    .get(accidentController.getOne)

export default router