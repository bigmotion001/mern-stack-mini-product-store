import express from "express";

import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";



const router = express.Router();


//add product to db
router.post('/create', addProduct);
//delete product
router.delete('/delete/:id', deleteProduct);

//get all products
router.get('/get', getProducts);

//update a product
router.put('/update/:id', updateProduct);








export default router;