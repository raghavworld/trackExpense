
import {createSlice} from '@reduxjs/toolkit'

const authSlice= createSlice({
    name:'auth',
    initialState:{
        user:JSON.parse(localStorage.getItem('userToken'))||null
    },
reducers:{
    loginAction:(state,action)=>{
        state.user=action.payload
    },
    logoutAction:(state,action)=>{
     
        state.user=null
    }

}
}) 

//! Generate Actions 
export const {loginAction,logoutAction} = authSlice.actions 

//! generate reducers
const  authReducer = authSlice.reducer

export default authReducer