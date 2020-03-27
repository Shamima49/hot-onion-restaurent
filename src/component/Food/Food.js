import React, { useState } from 'react';
import FoodItems from '../FoodItems/FoodItems';
import fakeData from '../../fakeData/foodData';
import './Food.css';

const Food = () => {
     const first10 = fakeData.slice(0,10);
    const [foodItems, setfoodItem] = useState(first10);

    const handleFoodItem = (foodItem) =>{
            console.log(foodItem);
    } 
    return (
        <section className="food-catagories-area">
          <div className="container">
            <div className="row">
                <div className="catagories">
                    <ul className="d-flex food-menu">
                            <li>
                              <button className="btn">Breakfast</button>
                            </li>
                            <li>
                              <button className="active btn">Launch</button>
                            </li>
                            <li>
                              <button className="btn">Dinner</button>
                            </li>
                    </ul>  
                </div>
            </div>

            <div className="row">
                     {
                         foodItems.map(fI => <FoodItems 
                          handleFoodItem = {handleFoodItem} 
                           item = {fI}></FoodItems>)
                     }
                 </div>
        </div>
    </section>
    )
 };

export default Food;     
