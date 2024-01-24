import React from "react";
import {RestaurenList} from "../config";
import RestaurantCard from "../Components/RestaurantCard";
import {useState , useEffect} from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
       restaurant.info.name.includes(searchText)
    );
    
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchText , setSearchtext] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }


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
            {restaurants.map((restaurant)=> {
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
