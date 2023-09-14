import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk('fetchproducts', async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  console.log(data);
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    isLoading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchproducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; // Update this line
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
