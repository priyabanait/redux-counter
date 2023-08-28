
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialCounterState={counter:0,showCounter:false}

const counterSlice=createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increament(state){
         state.counter++;
        },
        decreamemt(state){
            state.counter--;
        },
        increase(state,action){
state.counter=state.counter+action.payload
        },
        toggleCounter(state){
state.showCounter=!state.showCounter
        }
    }

})
const initialAuthState={isAuthenticated:false}
const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;

        },
        logOut(state){
            state.isAuthenticated=false;
        }

    }
})
   
const store=configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})
export const counterAction=counterSlice.actions;
export const authActions=authSlice.actions;
export default store;