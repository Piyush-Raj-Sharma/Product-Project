import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : []
}

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        loadUser: (state, action) => {  // state is the initial state here 
            console.log(action);
            state.data = action.payload; // when we pass something to loadUser it gets stores in action.payload
            
        }, //these are Actions - and are dispached not called like functions
    }
})

export const {loadUser} = userSlice.actions;

export default userSlice.reducer;