
import express from "express";

import { createTransaction, createOrder, getOrdersByUserId, getOrderById,  saveOrder, verifySignature  } from "../controllers/order.js";



const router = express.Router();

router.post("/transaction", createTransaction);
router.post("/verify", verifySignature);
router.post("/save", saveOrder);
router.post("/", createOrder);


router.get("/user/:userId", getOrdersByUserId);

// ❗ ALWAYS LAST → dynamic route
router.get("/:orderId", getOrderById); 


         


export default router
