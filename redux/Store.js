import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";

export const store = configureStore({
    reducer : {
        products : ProductsSlice
    }
})