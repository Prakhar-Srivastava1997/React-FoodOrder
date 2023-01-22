import classes from './FoodCard.module.css';
import CartContext from '../../HookStore/CartContext';
import { useContext } from 'react';

const FoodCard = (props) =>{
    const cartCtx = useContext(CartContext)

    const addToCart = ()=>{
        cartCtx.addItem({
            key:props.item.id,
            id:props.item.id,
            mealName:props.item.foodName,
            price:props.item.foodPrice,
            quantity:1
        })
    }

    return <>
    <div className={classes.card}>
        <div className={classes['card-image']}>
            <img src={props.item.foodImage} alt="foodimage"/>
        </div>
        <div className={classes['card-body']}>
            <p>{props.item.foodName}</p>
            <p>{props.item.foodCategory}</p>
            <p>${props.item.foodPrice}</p>
            <button className={classes.btn} onClick={addToCart}>Add To Cart</button>
        </div>
    </div>
    </>
}

export default FoodCard;