import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: Array, required: true },
    price: { type: Number, required: true },
    offrePrice: { type: Number, required: true },
    images: { type: Array, required: true },
    category: { type: String, required: true },
    inStoke: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default Product;
