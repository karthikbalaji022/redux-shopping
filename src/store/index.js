import { createStore } from "redux";
var initialValue={
    count:0
}
const reducer=(state={initialValue}, action)=>
{
switch(action.type)
{
    default:
        return state
}
}

const store=createStore(reducer)
export {store};
export default reducer