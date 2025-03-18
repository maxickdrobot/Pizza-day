import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, IPizza } from "../../interfaces";

interface CartState {
    items: ICartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IPizza>) {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.unitPrice,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
            }
            state.totalPrice += action.payload.unitPrice;
        },

        increment(state, action: PayloadAction<IPizza["id"]>) {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity++;
                state.totalPrice += existingItem.price;
            }
        },

        decrement(state, action: PayloadAction<IPizza["id"]>) {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                state.totalPrice -= existingItem.price;
            }
        },

        deleteInCart(state, action: PayloadAction<IPizza["id"]>) {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if (existingItem) {
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, increment, decrement, deleteInCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
