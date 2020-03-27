import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/foodData';
//import FoodItems from '../FoodItems/FoodItems';

const FoodDetails = () => {
    const {id} = useParams();
    const currentFood = fakeData.find(food => food.id === id);
       console.log(fakeData);
     
    return (
       
            <div className="food-details  container">
             <div className="row">
                <div className="col-md-6">
                    {/* <h5>{ currentFood.title} </h5>
                    <p>{ currentFood.description} </p>
                    <h2>{ currentFood.price} </h2>  */}
                </div>
              </div>
            </div>      
     
    );
};

export default FoodDetails;