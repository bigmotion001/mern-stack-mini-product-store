import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/product";
axios.defaults.withCredentials = true;

export const useProductStore = create((set) => ({
    products: null,
    error: null,
    isLoading: false,
    gettingProducts: false,
    message: null,


createProduct: async (name, price, image) => {
    set({ isLoading: true, error: null });

    try {
        const response = await axios.post(`${API_URL}/create`, { name, price, image })
        set({ product: response.data.product, isLoading: false})

    } catch (error) {
        
        set({ error: error.response.data.message || "error creating product", isLoading: false })
        throw error.response.data.message;
    }
},

//get all products
getProducts: async () => {
    set({ isLoading: true, error: null, gettingProducts: true });
    try {
        const response = await axios.get(`${API_URL}/get`);
        set({ products: response.data.data, isLoading: false, gettingProducts: false });
        
    } catch (error) {
        set({ error: error.response.data.message || "error fetching products", isLoading: false });
        throw error.response.data.message;
    }
},

//delete product
deleteProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        set({ products:  response.data.data , message:"product deleted successfully", isLoading: false });
    } catch (error) {
        set({ error: error.response.data.message || "error deleting product", isLoading: false });
        throw error.response.data.message;
    }
    },
    //update product
    updateProduct: async (id, name, price, image) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.put(`${API_URL}/update/${id}`, { name, price,
            image });
            set({ products: response.data.data, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.message || "error updating product", isLoading: false });
            throw error.response.data.message;
        }
    }

}));