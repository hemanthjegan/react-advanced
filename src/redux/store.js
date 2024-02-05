import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from './slice';

export const store = configureStore({
    devTools: true,  // if false, redux dev tools extension cannot be open no one can see our data while it processing

    reducer : {
        customers : CustomerSlice
    }
})