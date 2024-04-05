import express from "express"
import meterHistoryController from "../controllers/meterHistoryController"

const router = express.Router();

//route - /api/v1/meterHistory
//methods - GET, POST, PATCH, DELETE
router.route("/")
    .post(meterHistoryController.createOne)
    .get(meterHistoryController.getAll)

router.route("/:id")
    .patch(meterHistoryController.patchOne)
    .delete(meterHistoryController.deleteOne)
    .get(meterHistoryController.getOne)

export default router