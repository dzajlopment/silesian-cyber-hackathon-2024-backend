import express from "express"
import meterController from "../controllers/meterController"

const router = express.Router();

//route - /api/v1/meter
//methods - GET, POST, PATCH, DELETE
router.route("/")
    .post(meterController.createOne)
    .get(meterController.getAll)

router.route("/:id")
    .patch(meterController.patchOne)
    .delete(meterController.deleteOne)
    .get(meterController.getOne)

export default router