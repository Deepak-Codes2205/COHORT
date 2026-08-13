import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementby10: (state) => {
            state.value += 10
        }
    }
})

export const { increment, decrement, incrementby10 } = counterSlice.actions
export default counterSlice.reducer