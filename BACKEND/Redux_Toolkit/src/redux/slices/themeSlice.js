import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'Light'
    },
    reducers:{
        changeToDark: (state)=>{
            state.value = 'Dark'
        },
        changeToLight: (state)=>{
            state.value = 'Light'
        },
    },
});

export const { changeToDark, changeToLight} = themeSlice.actions;
export default themeSlice.reducer;