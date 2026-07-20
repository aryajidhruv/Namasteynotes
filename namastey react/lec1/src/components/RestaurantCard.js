import {CDN_URL } from "../utils/constant.js";
const RestaurantCard=(props)=>{
    const {resData}=props;

    const restaurantDetails = resData?.info || resData;
    const{name, cuisines, avgRating, costForTwo,sla,  cloudinaryImageId}=restaurantDetails;
    return (
        <div className="res-card"> <img className="res-logo " src={CDN_URL
            + cloudinaryImageId} />  
            
            <div className="res-text">
            <h3>{name}</h3>
    
            <h4 > {cuisines?.join(",   ")} {/* 
               use join to join arrays  */ }  </h4>
            <h4> {avgRating  }</h4>
            <h4>{costForTwo} </h4>
            <h4> {sla.deliveryTime || restaurantDetails?.deliveryTime}</h4>
 
            </div>
  
        </div>
    )
}
export default RestaurantCard;