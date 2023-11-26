import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '../../utils/constants'

interface ProductType {
  createdAt: string;
  name: string;
  image: string;
  price: number;
  description: string;
  model: string;
  brand: string;
  id: string;
}

interface ProductsState {
  productData: ProductType[];
  loading: boolean;
  error: string | null;
}

interface IState {
  productData: ProductType[];
  loading: boolean;
  error: string | null; 
}

export const fetchProducts = createAsyncThunk<ProductType[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const initialState: ProductsState = {
  productData: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchProducts.pending, (state: IState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state: IState, action: PayloadAction<ProductType[]>) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state: IState, action: PayloadAction<{ error: { message: string } }>) => {
        state.loading = false;
        state.error = action.payload.error.message;
      });
  },
});

export default productsSlice.reducer;
