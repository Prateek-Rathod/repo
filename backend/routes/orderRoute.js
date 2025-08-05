import express from 'express'
import { placeOrder, placeOrderRazorpay,allOrders,userOrder,updateStatus, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()


// Admin Features 
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features 
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/Razorpay',authUser,placeOrderRazorpay)


// User Features 
orderRouter.post('/userOrder',authUser,userOrder)

//verify payment 
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter