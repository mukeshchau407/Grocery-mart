import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  getAllOrder,
  getOrderByUserId,
  placeOrderCOD,
} from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCOD);
orderRouter.get("/user", authUser, getOrderByUserId);
orderRouter.post("/seller", authSeller, getAllOrder);

export default orderRouter;
