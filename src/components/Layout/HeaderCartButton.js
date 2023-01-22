import classes from './HeaderCartButton.module.css';
import CartContext from '../../HookStore/CartContext';
import { useContext } from 'react';

const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curVal, item)=>{
        return curVal + item.quantity
    }, 0)

return <button className={classes.cartbutton} onClick={props.onClick}>
    <span className={classes.carticon}><i className="fa fa-shopping-cart"></i></span>
    <span className={classes.cartText}>My Cart</span>
    <span className={classes.cartNumber}>{numberOfCartItems}</span>
</button>

}

export default HeaderCartButton;