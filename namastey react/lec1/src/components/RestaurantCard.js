import {CDN_URL } from "../utils/constant.js";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,costForTwo,deliveryTime}=resData;
    return (
        <div className="res-card"> <img className="res-logo" src={CDN_URL
            + resData.cloudinaryImageId} />  
            
            <div className="res-text">
            <h3>{name}</h3>
    
            <h4 > {resData?.cuisines?.join(",   ")} {/* 
               use join to join arrays  */ }  </h4>
            <h4> {avgRating  }</h4>
            <h4>{costForTwo} </h4>
            <h4> {  deliveryTime}</h4>
 
            </div>
  
        </div>
    )
}
export default RestaurantCard;