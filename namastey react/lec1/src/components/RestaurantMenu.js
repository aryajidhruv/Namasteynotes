import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu =()=>{

    const [resInfo,setResInfo]= useState(null)
    useEffect(()=>{
        fetchMenu();    }
    ,[])
 


    const fetchMenu = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5250031&lng=77.2319834&restaurantId=1373310&catalog_qa=undefined&submitAction=ENTER')

       const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };
    const {name, cuisines,costForTwo,availability}= resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
    
    return resInfo === null?(<Shimmer/>):(

       <></>
        // <div className="menu ">
        //     <h1>{name}</h1>
        //     <h2>{cuisines}</h2>
        //     <h2>{costForTwo}</h2>
        //     <h2>{availability}</h2>
           
        // </div>
    )
}
export default RestaurantMenu;