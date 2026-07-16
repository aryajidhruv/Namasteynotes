 
import resList from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
 const Body =()=>{
    return (
        <div className="body">
            <div className="search">
                Search

            </div>
            
            <div className="res-container">
                 
           {/* <RestaurantCart resData ={resList[0]} />
                <RestaurantCart resData ={resList[1]} / another way to write this is given below to avoid hard coded
                >*/}

                 {
                    resList.map((restaurant)=> <RestaurantCard key={restaurant.id}
                     resData={restaurant}/>)
                    
                 }
                
            
               

            </div>
            <div>

            </div>


        </div>
    )
}
export default Body;