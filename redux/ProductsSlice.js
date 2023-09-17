import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk('fetchproducts' , async() => {
    const response =  await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    console.log(data)
    return data
})

 const productSlice = createSlice({
    name :'products',
    initialState : {
        data : [],
        isloading : true,
    },
    extraReducers : (builder) => {
     builder
     .addCase(fetchproducts.pending , (state,action) => {
        state.isloading = true
     })
     .addCase(fetchproducts.fulfilled , (state,action) => {
        state.isloading = false
        state.data = action.payload
     })
     .addCase(fetchproducts.rejected , (state,action) => {
        state.isloading = false
     })

    }
})
export default productSlice.reducer