import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface initialStateType {
    inSidebarClose: boolean;
    isDarkMode: boolean;
};

const initialState:initialStateType = {
    inSidebarClose: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarClose: (state, action: PayloadAction<boolean>) => {
            state.inSidebarClose = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
})

export const {setIsDarkMode, setIsSidebarClose} = globalSlice.actions;
export default globalSlice.reducer;