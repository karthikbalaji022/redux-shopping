import React from "react";
import { useSelector ,useDispatch} from "react-redux";
var select;
var dispatch;
function logout(e){
    dispatch({type:"login",payload:{val:false}})
  }
function Shop(){
     select=useSelector((state)=>state)
   dispatch=useDispatch();
    return(
        <div>
                <input type="submit" value="LogOut" onClick={logout} />

        </div>
    )
}

export default Shop;