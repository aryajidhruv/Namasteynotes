
import { Import } from "lucide-react";
import RestaurantCard from "../components/RestaurantCard";
import { useState ,useEffect} from "react"; 
import Shimmer from "./Shimmer";





 const Body =()=>{
    const[listOfRestaurant, setlistOfRestaurant]= useState([]);
    const [filteredRestaunt,setFilteredRestaunt]=useState([]); //This is the copy of restaurant

    const [searchText,setsearchText]=useState("")
    console.log ("rerender")

    //step 1
   useEffect(()=>{
    fetchData()},
    []);
   
    //step1 use async await because fetch return promises
   const fetchData = async ()=>{const data =  await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5250031&lng=77.2319834&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //step3
   const json = await data.json(); 
   console.log(json)


   // Stop right at the restaurants array!
   //optional chaining
setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setFilteredRestaunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

//loading button
//conditional rendering
// if(listOfRestaurant.length===0){
//     return <Shimmer/>
// }

   




    




    return listOfRestaurant.length ===0 ?(<Shimmer/>): (
       
        <div className="body">
            <div className="filter">
                <div>
                    <input type="text" 
                    className="search-box"
                    value={searchText}
                     onChange={(e)=>{
                        setsearchText(e.target.value)
                     }}/>

                    <button className="search-btn"  onClick={()=>{
                        //filter the restaurant card update the UI
                        //search text
                        console.log(searchText)

                        const filteredRestaunt =listOfRestaurant.filter(
                            (res)=>res?.info ?.name.toLowerCase().includes( searchText.toLowerCase( )))
                            setFilteredRestaunt(filteredRestaunt)
                    }}>search </button>
                </div>
                <button
                 className="filter-btn"
                 onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                    (res)=>(res?.info.avgRating|| res?.avgRating)> 4.4
                    );
                    s(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div> 
            
            <div className="res-container">
                 
            

                 {
                   filteredRestaunt.map((restaurant)=> <RestaurantCard key={restaurant?.info?.id || restaurant?.id}
                     resData={restaurant}/>)
                    
                 }
                
            
               

            </div>
            <div>

            </div>


        </div>
    )
}
export default Body;