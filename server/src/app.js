import express from "express";
import cors from "cors";
import testRoutes from "./routes/testRoutes.js";
import warrantyRoutes from "./routes/warrantyRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/warranties", warrantyRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "WarrantyWise backend is running"
    });
});

// Test routes
app.use("/api/test", testRoutes);

export default app;
