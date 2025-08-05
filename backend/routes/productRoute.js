import express from "express";
import {
  listProduct,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

/**
 * @route   POST /api/product/add
 * @desc    Add a new product (Admin only)
 * @body    {
 *            name, description, price,
 *            category, section, subCategory,
 *            sizes[], bestseller,
 *            image1..image4
 *          }
 * @access  Private (Admin)
 */
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

/**
 * @route   POST /api/product/remove
 * @desc    Remove a product by ID (Admin only)
 * @access  Private (Admin)
 */
productRouter.post("/remove", adminAuth, removeProduct);

/**
 * @route   POST /api/product/single
 * @desc    Get single product details by ID
 * @body    { productId }
 * @access  Public
 */
productRouter.post("/single", singleProduct);

/**
 * @route   GET /api/product/list
 * @desc    Get all products (optional filters: category, section, subCategory)
 * @query   ?category=Men&section=Topwear&subCategory=T-Shirts
 * @access  Public
 */
productRouter.get("/list", listProduct);

export default productRouter;
