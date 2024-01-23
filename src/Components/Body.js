import React from "react";
import {RestaurenList} from "../config";
import RestaurantCard from "../Components/RestaurantCard";
import {useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
       restaurant.info.name.includes(searchText)
    );
    
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(RestaurenList)
    const [searchText , setSearchtext] = useState("");

    return (
      <>
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
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
            }}>Search </button>
        </div>

        <div className = "restaurant-list">
            {
                restaurants.map((restaurant)=> {
                    return (
                       <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    );
                })
            }
        </div>
      </>
    );
};

export default Body;
