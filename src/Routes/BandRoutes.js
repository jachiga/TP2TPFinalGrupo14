import { Router } from "express";

import BandController from "../Controllers/bandController.js";
import BandService from "../Services/bandService.js";

const router = Router();
const bandController = new BandController(new BandService());

router.get("/", bandController.getAll);
router.get("/:id", bandController.getById);
router.post("/", bandController.create);
router.put("/:id", bandController.update);
router.delete("/:id", bandController.delete);

export default router;
