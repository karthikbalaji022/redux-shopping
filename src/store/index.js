import { createStore } from "redux";

const reducer=(state={
    id:"karthikbalaji022@gmail.com",
    pass:"1234",
    loggedin:false,
    cartItem:{},
    count:0

}, action)=>
{
switch(action.type)
{
    case "login":
        return {...state,loggedin:action.payload.val}
    case "count":
        state.count=state.count+1;
        return state
    case "additem":
        var item=action.payload.item
        let i=item.id
        console.log(state.cartItem)
        if(state.cartItem.hasOwnProperty(item.id))
        {
            Object.entries(state.cartItem).map(([key,value])=>{
                if(key===i)
                {
                  return  state.cartItem={...state.cartItem,[key]:{...value,quantity:value.quantity+1,totalPrice:value.price*(value.quantity+1)}}
                }
            })
            
        }else{
            state.cartItem={
                ...state.cartItem,
                [item.id]:{...item,quantity:1,totalPrice:item.price}
            }
        }
                    
        return state
    case "remove":

        if(state.cartItem.hasOwnProperty(item.id))
        {
            Object.entries(state.cartItem).map(([key,value])=>{
                if(key===i)
                {
                  return  state.cartItem={...state.cartItem,[key]:{...value,quantity:value.quantity-1,totalPrice:value.price*(value.quantity-1)}}
                }
            })
        }
        return state;
    default:
        return state
}
}

const store=createStore(reducer)
export default store;
