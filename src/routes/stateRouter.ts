import express from "express"
import stateController from "../controllers/stateController"

const router = express.Router();

//route - /api/v1/state
//methods - GET, POST, PATCH, DELETE
router.route("/")
    .post(stateController.createOne)
    .get(stateController.getAll)

router.route("/:id")
    .patch(stateController.patchOne)
    .delete(stateController.deleteOne)
    .get(stateController.getOne)

export default router