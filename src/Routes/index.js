import { Router } from "express";

import albumRoutes from "./AlbumRoutes.js";
import bandRoutes from "./BandRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API está corriendo correctamente",
  });
});

router.use("/bands", bandRoutes);
router.use("/albums", albumRoutes);

export default router;
