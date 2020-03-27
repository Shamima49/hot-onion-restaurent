import React from 'react';
import './FoodItems.css';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {
  
    const {img, title, subtitle, price, id} = props.item;
    console.log(props.item.title);

    return (  
      <div onClick={() => props.handleFoodItem(props.item)}>
        <Link to={"food/"+id}>
         <div className="card">
           <img className="card-img-top" src={img} alt="" />
            <div className="card-body">
             <h5 className="card-title">{title} </h5>
               <p className="card-text">{subtitle} </p>
                <h3>$ {price} </h3>
    </div>
  </div>
  </Link>
</div>

    );
};


export default FoodItems;                          