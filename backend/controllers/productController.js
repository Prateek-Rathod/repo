import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

/**
 * @desc Add a new product (Admin only)
 */
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category, // e.g., "Men"
      section,  // e.g., "Topwear"
      subCategory, // e.g., "T-Shirts"
      sizes,
      bestseller,
    } = req.body;

    // Validate required fields
    if (!name || !description || !price || !category || !section || !subCategory || !sizes) {
      return res.json({ success: false, message: "All required fields must be filled" });
    }

    // Extract uploaded files
    const uploadedFiles = [
      req.files.image1?.[0],
      req.files.image2?.[0],
      req.files.image3?.[0],
      req.files.image4?.[0]
    ].filter(Boolean);

    if (!uploadedFiles.length) {
      return res.json({ success: false, message: "At least one product image is required" });
    }

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      uploadedFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // Create product object
    const productData = {
      name,
      description,
      price: Number(price),
      category,     // Men, Women, Kids
      section,      // Topwear, Bottomwear, Footwear
      subCategory,  // T-Shirts, Jeans, etc.
      sizes: JSON.parse(sizes), // Convert JSON string back to array
      bestseller: bestseller === "true",
      image: imageUrls,
      date: Date.now(),
    };

    const newProduct = new productModel(productData);
    await newProduct.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.json({ success: false, message: error.message });
  }
};

/**
 * @desc List products with optional filters
 * @query category, section, subCategory, minPrice, maxPrice, search
 */
const listProduct = async (req, res) => {
  try {
    const { category, section, subCategory, minPrice, maxPrice, search } = req.query;

    let filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }
    if (section) {
      filter.section = section;
    }
    if (subCategory) {
      filter.subCategory = subCategory;
    }
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const products = await productModel.find(filter).sort({ date: -1 });
    res.json({ success: true, count: products.length, products });
  } catch (error) {
    console.error("List Product Error:", error);
    res.json({ success: false, message: error.message });
  }
};

/**
 * @desc Remove a product by ID
 */
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Remove Product Error:", error);
    res.json({ success: false, message: error.message });
  }
};

/**
 * @desc Get single product details by ID
 */
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    console.error("Single Product Error:", error);
    res.json({ success: false, message: error.message });
  }
};

export { listProduct, addProduct, singleProduct, removeProduct };
