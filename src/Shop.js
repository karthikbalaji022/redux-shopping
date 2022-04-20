import React,{useEffect, useState} from "react";
import { useSelector ,useDispatch} from "react-redux";
import Items from './listData'
 import CartItem from './CartItem'
var select;
var dispatch;
function logout(e){
    dispatch({type:"login",payload:{val:false}})
  }
function Shop(){
  select=useSelector((state)=>state)
  const [count,setCount]=useState(select.setCount)
  const [showCart,setShowCart]=useState(false);
   dispatch=useDispatch();
   function show(e){
    setShowCart((prev)=>!prev)
   }
    return(
      <div className="shop">
        <nav className="nav">
              <h1 className="shopname">Redux shopping cart</h1>
              <div className="rightShop">
                <div className="cartItems" onClick={show}>cart items: {count}</div>
                <input type="submit" value="LogOut" onClick={logout} />
              </div>
        </nav>
          <div className="shopContainer">
            {Items.map((val)=>{
                return <Product key={val.id} id={val.id} name={val.name} price={val.price} setCount={setCount}/>
            })}
          </div>
          {showCart && <CartItem items={select.cartItem}/>}
        </div>

    )
}

function Product({id,name,price,setCount}){
  return <div className="itembox">
    <h1>{name}</h1>
    <h1>{price}$</h1>
    <input id={id} type="button" onClick={()=>{
dispatch({type:"count"})
    setCount((prev)=>select.count)
      dispatch({type:"additem",payload:{
        item:{id:id,name:name,price:price}
      }})
    }} value="Add cart"/>
  </div>
}
export default Shop;