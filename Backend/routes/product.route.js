import express from "express";
const { upload } = require("../utils/multer");
import { authSeller } from "../middlewares/authSeller";
import {
  addProduct,
  changeStock,
  productById,
  productList,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/add", upload.array("images"), authSeller, addProduct);

productRouter.get("/list", productList);
productRouter.get("/id/:id", productById);
productRouter.get("/stock", authSeller, changeStock);

export default productRouter;
