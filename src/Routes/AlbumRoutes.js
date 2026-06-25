import { Router } from "express";

import AlbumController from "../Controllers/albumController.js";
import AlbumService from "../Services/albumService.js";

const router = Router();
const albumController = new AlbumController(new AlbumService());

router.get("/", albumController.getAll);
router.get("/:id", albumController.getById);
router.post("/", albumController.create);
router.put("/:id", albumController.update);
router.delete("/:id", albumController.delete);

export default router;
