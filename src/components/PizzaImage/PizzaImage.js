import React from 'react';
import classes from './PizzaImage.module.css'
import PizzaImage from '../../assets/pizza.jpg'

const pizaImage = (props) => {
    return ( 
        <div className={classes.PizzaImage} >
    <img src={PizzaImage} className={classes.PizzaImg} />
        </div>
     );
}
 
export default pizaImage;
