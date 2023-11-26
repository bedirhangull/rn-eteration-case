import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favorites: ProductType[];
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] } as FavoritesState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ProductType>) => {
      const isProductInFavorites = state.favorites.find(
        (favProduct) => favProduct.id === action.payload.id
      );
      if (!isProductInFavorites) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<ProductType>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;