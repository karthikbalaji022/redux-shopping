import { createStore } from "redux";

const reducer=(state={
    id:"karthikbalaji022@gmail.com",
    pass:"1234",
    loggedin:false
}, action)=>
{
switch(action.type)
{
    case "login":
        return {...state,loggedin:action.payload.val}
    default:
        return state
}
}

const store=createStore(reducer)
export default store;
