import React from "react";
import {RestaurenList} from "../config";
import RestaurantCard from "../Components/RestaurantCard";
import {useState , useEffect} from "react";
import Shimmer from "../Components/Shimmer";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
       restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    
    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([  ])
    const [filteredrestaurants, setfilteredRestaurants] = useState([])
    const [searchText , setSearchtext] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!allRestaurants) return null;

    // if(filteredrestaurants?.length === 0){
    //     return <h1>No Restaurants match your filter</h1>;
    // }


    return allRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
      <div>
        <div className= "search-container">
           <input 
             type= "text"
             className = "search-input"
             placeholder = "Search"
             value = {searchText}
             onChange = {(e) => {
                setSearchtext(e.target.value);
            }}
            />
            <button className="search-btn" onClick={()=>{
                const data = filterData(searchText, allRestaurants);
                setfilteredRestaurants(data);
            }}>Search </button>
        </div>
         
        <div className = "restaurant-list">
            {filteredrestaurants?.length === 0 ? (
                <h1> No Restaurants matched your search</h1>
            ) : (
            filteredrestaurants?.map((restaurant)=> {
                return (
                   <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                );
                }))
            }
        </div>
      </div>
    );
};

export default Body;
