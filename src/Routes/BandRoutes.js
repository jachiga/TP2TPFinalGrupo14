import { Router } from "express";

const router = Router();

// GET /api/bands
router.get("/", (req, res) => {});

// GET /api/bands/:id
router.get("/:id", (req, res) => {});

// POST /api/bands
router.post("/", (req, res) => {});

// PUT /api/bands/:id
router.put("/:id", (req, res) => {});

// DELETE /api/bands/:id
router.delete("/:id", (req, res) => {});

export default router;