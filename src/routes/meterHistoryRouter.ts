import express from "express"
import meterHistoryController from "../controllers/meterHistoryController"

const router = express.Router();

router.route("/")
    .post(meterHistoryController.createOne)
    .get(meterHistoryController.getAll)

router.route("/:")
    .patch(meterHistoryController.patchOne)
    .delete(meterHistoryController.deleteOne)
    .get(meterHistoryController.getOne)

export default router