import classes from './MealsSummary.module.css';
import { Fragment, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const MealSummary = ()=>{

    useEffect(()=>{
        AOS.init({
            offset:200,
            duration:1000
        });
    },[]);

    return <Fragment>
        <div className={classes['meal-summary']} data-aos="fade-right">
        <h1 className={classes['top-heading']} >Make your day special with some delicious food!!!</h1>
        <h4 className={classes['middle-heading']}>Tasty food at your door step....Hurry up Order Now!</h4>
        <p className={classes['para']}>Food is art and science. So, you take something out, you have to work with the recipe to make sure that you're providing delicious food with cleaner labels. The best way to celebrate is with some delicious food.</p>
        </div>
    </Fragment>
}

export default MealSummary;