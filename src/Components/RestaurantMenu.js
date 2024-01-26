import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=");
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    return (
        <div>
           <h1>Restaurant id: {resId} </h1>
           <h2> Namaste </h2>
        </div>
    )
}

export default RestaurantMenu;