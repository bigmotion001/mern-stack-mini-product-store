import Product from "../models/product.model.js";
import mongoose from "mongoose";

//add products
export const addProduct = async (req, res) => {

    const product = req.body;
    //validate
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    //check if product exist
    const existingProduct = await Product.findOne({ name: product.name });
    if (existingProduct) {
        return res.status(400).json({ success: false, message: "Product  already exist"});
    }

    //add to db
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });

    } catch (error) {
        console.error("error in creating product", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }

}

//get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("error in getting products", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
}

//delet products
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "product deleted" });
    } catch (error) {
        console.error("error in deleting product", error.message);
        res.status(404).json({ success: false, message: "Product not found" });
    }
}

//update products
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    //check if product id exist
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product " });
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("error in updating product", error.message);
        res.status(404).json({ success: false, message: "Product not found" });
    }
}