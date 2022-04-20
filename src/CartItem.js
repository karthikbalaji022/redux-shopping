import React from "react";

function CartItem({items}){
    const cartItem=[]
    
    console.log(cartItem)
    return (
    //     {
    //         Object.value(items).map(([value])=>{
    //         return <Ele value={value}/>
    //    })
    // }
    <></>
    )
}

function Ele({value}){
    return (
<div className="cartBox">
                <h1>{value.name}</h1>
                <p>{value.quantity}</p>
                <p>{value.price}</p>
                <p>{value.totalPrice}</p>
            </div>
    )
}
export default CartItem