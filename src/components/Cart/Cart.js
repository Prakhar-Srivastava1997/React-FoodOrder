import classes from './Cart.module.css';
import CartContext from '../../HookStore/CartContext';
import { useContext, useState } from 'react';
import Modal from '../UI/Modal.js';

const Cart = props =>{

    const cartCtx  = useContext(CartContext);

    const addInputQtyHandler=(item)=>{
        cartCtx.addItem(item)
    }

    const reduceInputQtyHandler=(id)=>{
        
        cartCtx.removeItem(id)
    }

    const inputChangeHandler = ()=>{
        console.log("Input value changed")
    }

    return (
        <Modal className={classes.container}>
            <h1 className={classes['cart-heading']}>Manage Your Cart....</h1>
            {cartCtx.items.map((item)=>{
                return (
                    <div key={item.id} className={classes['cart-item']}>
                        <p className={classes['meal-name']}>{item.mealName}</p>
                        <p>x <strong className={classes['meal-qty']}>{item.quantity}</strong></p>
                        <div className={classes['inputdiv']}>
                            <button type = 'button' onClick={()=>addInputQtyHandler(item)} className={classes['inputbtn']}>+</button>
                            <button type = 'button' onClick={()=>reduceInputQtyHandler(item.id)} className={classes['inputbtn']}>-</button>
                        </div>
                        <p className={classes['meal-price']}>${item.price*item.quantity}</p>
                    </div>
                )
            })}
            {cartCtx.items.length !==0 && <div className={classes['totaldiv']}>
                <h2 className={classes['subtotal']}>Sub-Total : ${cartCtx.totalAmount}</h2>
                <h1 className={classes['grandtotal']}>Grand-Total : ${cartCtx.totalAmount}</h1>
            </div>}
            
            <div className={classes['spandiv']}>
                {cartCtx.items.length === 0 && <span className={classes['span-msg']}>Oops! Your cart is empty...please add items</span>}
                <span><button onClick = {props.onHideCart} className={classes['spanbtn']}>Close</button></span>
                {cartCtx.items.length!==0 && <span><button className={classes['spanbtn']}>Order</button></span>}
            </div>
        </Modal>
    )
}

export default Cart;