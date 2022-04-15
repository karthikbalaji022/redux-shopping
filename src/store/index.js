import React from 'react'
import { createStore } from 'redux'
const reducer=(state={
    counter:1
},action)=>{
    console.log(state)
    switch(action.type)
    {
        case "inc":
            return {counter:state.counter+1};
        case "dec":
            return {counter:state.counter-1};
        case "addval":
            return {counter:state.counter+action.payload.val};
         default:
            return state;
    }
}

const store=createStore(reducer)
export default store;