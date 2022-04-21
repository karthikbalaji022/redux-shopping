import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
var select;
var dispatch;
function CartItem({ items }) {
  select = useSelector((state) => state);
  dispatch = useDispatch();
  const cartItem = [...Object.values(items)];
console.log(items+" states")
  return (
    <div className="cart-box">
      <div className="columnHeading">
        <h1>Product Name</h1>
        <h1>quantity</h1>
        <h1>Price</h1>
        <h1>totalPrice</h1>
        <h1>ADD</h1>
        <h1>Remove</h1>
      </div>
      {cartItem.map((item) => {
        return <Ele key={item.id} value={item} />;
      })}
    </div>
  );
}

function Ele({ value }) {
  return (
    <div className="cartBox">
      <h1>{value.name}</h1>
      <p>{value.quantity}</p>
      <p>{value.price}</p>
      <p>{value.totalPrice}</p>
      <button
        id={value.id}
        className="add"
        onClick={() => {
            dispatch({type:"count"})

          dispatch({
            type: "additem",
            payload: {
              item: { id: value.id, name: value.name, price: value.price }
            }
          });
        }}
      >
        +
      </button>
      <button id={value.id} className="remove" onClick={()=>{
          dispatch({type:"remove",payload:{id:value.id}})
      }}>
        -
      </button>
    </div>
  );
}
export default CartItem;
