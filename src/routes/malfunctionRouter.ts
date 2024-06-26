import express from "express"
import malfunctionController from "../controllers/malfunctionController"

const router = express.Router();

//route - /api/v1/malfunction
//methods - GET, POST, PATCH, DELETE
router.route("/")
    .post(malfunctionController.createOne)
    .get(malfunctionController.getAll)

router.route("/:id")
    .patch(malfunctionController.patchOne)
    .delete(malfunctionController.deleteOne)
    .get(malfunctionController.getOne)

export default router