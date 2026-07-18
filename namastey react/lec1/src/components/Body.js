import resList from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react"; 





 const Body =()=>{
    const[listOfRestaurant, setlistOfRestaurant]= useState(resList);




    return (
       
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res)=>res.avgRating > 4.4
                    );
                    setlistOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            
            <div className="res-container">
                 
            

                 {
                    listOfRestaurant.map((restaurant)=> <RestaurantCard key={restaurant.id}
                     resData={restaurant}/>)
                    
                 }
                
            
               

            </div>
            <div>

            </div>


        </div>
    )
}
export default Body;