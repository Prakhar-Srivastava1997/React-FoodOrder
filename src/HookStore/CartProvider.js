import CartContext from "./CartContext";
import { useReducer } from "react";

const initialState = {
    items:[],
    totalAmount:0,
    totalQuantity:0
}

const cartReducer = (state=initialState, action)=>{
    if(action.type === 'ADD'){

        const updatedTotalAmount = state.totalAmount + action.payload.price;
        const updatedQuantity = state.totalQuantity + action.payload.quantity

        const existingMealIndex = state.items.findIndex(item=>item.id === action.payload.id)
        const existingMealItem = state.items[existingMealIndex]
        if(existingMealItem)
        {
            const updatedItem = {
                ...existingMealItem,
                quantity:existingMealItem.quantity + 1
            }
            const updatedItems = [...state.items];
            updatedItems[existingMealIndex] = updatedItem
            console.log("Quantity : ", updatedItem.quantity)
            return {
                items:updatedItems,
                totalAmount:updatedTotalAmount,
                totalQuantity:updatedQuantity
            }
        }
        else{
            const updatedItems = state.items.concat(action.payload);
            return {
                items:updatedItems,
                totalAmount:updatedTotalAmount,
                totalQuantity:updatedQuantity
            }
        }
        
    }
    if(action.type === 'REMOVE'){
        console.log("Id value : ", action.payload)
        const mealId = state.items.findIndex((item)=>item.id === action.payload)
        const cartItem = state.items[mealId]

        if(cartItem.quantity>1){
            let updatedItem = {
                ...cartItem,
                quantity:cartItem.quantity - 1
            }
        let updatedItems = [...state.items];
        updatedItems[mealId] = updatedItem
        
        return {
            items:updatedItems,
            totalAmount:state.totalAmount - cartItem.price,
            totalQuantity:state.totalQuantity - 1
        }
        }
        else{
            let updatedItems = state.items.filter((item)=>item.id !== action.payload)
            return {
                items:updatedItems,
                totalAmount:state.totalAmount - cartItem.price,
                totalQuantity:state.totalQuantity
            }
        }
    }
    return initialState;
}

const CartProvider = (props)=>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState)

    const addItemToCartHandler = (item)=>{
        dispatchCartAction({type:'ADD', payload:item})
    }

    const removeItemFromCartHandler = (id)=>{
        dispatchCartAction({type:'REMOVE', payload:id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        totalQuantity:cartState.totalQuantity,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;