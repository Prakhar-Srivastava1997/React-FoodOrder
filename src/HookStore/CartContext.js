import React from 'react';


const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    totalQuantity:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext;