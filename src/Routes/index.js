import { Router } from "express";

import bandRoutes from "./BandRoutes.js";
import albumRoutes from "./AlbumRoutes.js";

const router = Router();

router.use("/bands", bandRoutes);
router.use("/albums", albumRoutes);

export default router;