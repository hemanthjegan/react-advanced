import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CustomerSlice = createSlice({
    name : 'customer',
    initialState : initialState,

    reducers : {
        addCustomer(state, action){   // action data comes from action creator
            state.push(action.payload)
        },
        deleteCustomer(state, action){
            const deleteIndex = action.payload;
            return state.filter((val, index)=> index !== deleteIndex)    // here state has stored datas
        }
    }
})

// export const addCustomer = CustomerSlice.actions.addCustomer

export const {addCustomer, deleteCustomer} = CustomerSlice.actions;  // this is called action creator by using dispatch method user passed the data as a parameter and surrond with dispatch methd ex: dispatch(actionCreator(data))

export default CustomerSlice.reducer;  // export the stored datas from here and use this in store component for storing in store and accessed like a global store.
