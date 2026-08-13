import { configureStore} from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import counterReducer from './slices/counterSlice'  

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        theme: themeReducer
    },
})

export {
    counterReducer,
    themeReducer
}