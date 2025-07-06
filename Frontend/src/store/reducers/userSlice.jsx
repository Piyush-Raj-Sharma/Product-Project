import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : null,
}

const userSlice = createSlice({
    name: "users",
    initialState,

    reducers: {  // here reducers means actions & is only the one who is capable to mutate initialState
        loadUser: (state, action) => {  // state is the initial state here 
            // console.log(action);
            state.userData = action.payload; // when we pass something to loadUser it gets stores in action.payload
            
        }, //these are Actions - and are dispached not called like functions
        removeUser: (state, action) => {
            state.userData = null;
        },
    }
})

export const {loadUser, removeUser} = userSlice.actions;

export default userSlice.reducer;