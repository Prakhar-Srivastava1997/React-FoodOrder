import classes from './Menu.module.css';
import { useSelector } from 'react-redux';
import { getAllMeals } from "../../ReduxStore/foodSlice";
import FoodCard from './FoodCard';
import { Fragment, useEffect } from 'react';
import AOS from 'aos';

const Menu = ()=>{
    const allMeals = useSelector(getAllMeals);

    useEffect(()=>{
        AOS.init({
            offset:200,
            duration:2000
        })
    }, [])
    
    return <Fragment>
        <div data-aos="fade-left">
            <h1 className={classes['menu-heading']}>Our Delicious Menu</h1>
        </div>
        <div className={classes['card-container']} data-aos="zoom-in">
        {allMeals.map((meal)=>
           <FoodCard key={meal.id} item={meal}/>
        )}
        </div>
    </Fragment>
}

export default Menu;