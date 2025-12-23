import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
     loading: false,
     error: null,
     user: null,
     isAuthenticated : false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
         authStart : (state)=>{
             state.loading = true,
             state.error = null
         },

         authSuccess : (state , action)=>{
              state.loading = false,
              state.user = action.payload || null
              state.isAuthenticated = true
         },

         authFailure  :(state , action)=>{
             state.loading = false,
             state.error = action.payload,
             state.isAuthenticated = false
         },

         logout : (state , action)=>{
             state.user = null,
             state.loading = false,
             state.error = false,
             state.isAuthenticated = false
         }
    }

})


export const {authFailure , authStart , authSuccess , logout} = userSlice.actions

export default userSlice.reducer