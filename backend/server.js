import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = express();

app.use(express.json());

app.use(cookieParser());

dotenv.config({ path: '.env' });
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const PORT = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use("/api/product", productRoutes)



//home page rouute
app.get('/', (req, res) => { res.send("Home Page") });










//port url
app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" +PORT);
});