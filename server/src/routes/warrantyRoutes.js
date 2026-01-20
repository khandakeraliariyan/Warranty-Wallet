import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
    createWarranty,
    getMyWarranties,
    getWarrantyById,
    updateWarranty,
    deleteWarranty
} from "../controllers/warrantyController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createWarranty);
router.get("/", getMyWarranties);
router.get("/:id", getWarrantyById);
router.put("/:id", updateWarranty);
router.delete("/:id", deleteWarranty);

export default router;
