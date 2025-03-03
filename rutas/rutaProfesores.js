import { Router } from "express";
import profesorController from '../controladores/controlProfesores.js'

const router = Router();
router.route("/profesores")
  .get(profesorController.get)
  .post(profesorController.post)

router.route("/profesores/:id")
  .get(profesorController.getOne)
  .put(profesorController.put)
  .delete(profesorController.delete)

export default router;