import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../interfaces";

interface MenuState {
    menuItems: IPizza[];
    isLoading: boolean;
    error: string;
}

const initialState: MenuState = {
    menuItems: [],
    isLoading: false,
    error: "",
};

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
    const response = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
    const data = await response.json();
    return data.data;
});

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenu.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getMenu.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
            state.menuItems = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getMenu.rejected, (state) => {
            state.isLoading = false;
            state.error = "Something went wrong... Fetch data error";
        });
    },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;
