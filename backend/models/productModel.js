import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    image: {
      type: [String], // Array of Cloudinary URLs
      required: [true, "At least one product image is required"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: ["Men", "Women", "Kids", "Sports", "Unisex"], // Main category
    },
    section: {
      type: String,
      required: [true, "Product section is required"],
      enum: [
        "Topwear",
        "Bottomwear",
        "Footwear",
        "Accessories",
        "Boys Clothing",
        "Girls Clothing",
        "Others"
      ], // Mid-level category
    },
    subCategory: {
      type: String,
      required: [true, "Product sub-category is required"],
      trim: true, // Example: T-Shirts, Jeans, Kurtis
    },
    sizes: {
      type: [String], // Example: ["S", "M", "L", "XL"] or ["6", "7", "8"]
      required: [true, "Available sizes are required"],
    },
    bestseller: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt
  }
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
