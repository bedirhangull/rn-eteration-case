import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

//reducers
import productReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import favReducer from "./fav/favoriteSlice";

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  fav: favReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);
export { store, persistor }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
