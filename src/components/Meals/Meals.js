import MealSummary from "./MealsSummary"
import { Fragment, useEffect } from "react";
import Menu from "./Menu";
import {fetchAsyncMeals} from '../../ReduxStore/foodSlice';
import { useDispatch } from "react-redux";

const Meals = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMeals())
    }, [dispatch])

    return <Fragment>
        <MealSummary/>
        <Menu/>
    </Fragment>
}

export default Meals;